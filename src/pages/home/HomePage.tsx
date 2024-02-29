import React, { useEffect } from 'react'
import { IMessageEvent, w3cwebsocket as W3CWebSocket, w3cwebsocket } from "websocket";
import { useState } from 'react';
import { Room, RoomQuestion } from '../../interfaces/question';
import { toast } from 'sonner';
import { CreateQuestionModal } from './components/CreateQuestionModal';


type MenssageType = 'chat_message' | 'question_created' | 'notify_sale' | 'room_data' | 'question_deleted';

type Message = {
  type: MenssageType;
  message: string;
  room?: Room;
  question_data?: RoomQuestion;
  question_id?: string;
};

export const HomePage = () => {
  const [roomData, setroomData] = useState<Room | null>(null);
  const [socket, setSocket] = useState<w3cwebsocket | null>(null);
  useEffect(() => {
    const ENDPOINT = 'ws://127.0.0.1:8000/ws/room/test/?query_string=${userId}';

    // En los headers se envía el token de autenticación
    const socket = new W3CWebSocket(ENDPOINT, undefined, undefined, {
      "authorization": "Token TU_TOKEN_DE_AUTENTICACION", // Reemplaza 'TU_TOKEN_DE_AUTENTICACION' con el token real
      "accept-charset": "utf-8",
      "x-token":"TOOKEN AQUI "
    });
  setSocket(socket);
    socket.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    socket.onmessage = (message: IMessageEvent) => {
      const dataFromServer: Message = JSON.parse(message.data.toString());

      switch (dataFromServer.type) {
        case 'chat_message':
          console.log(dataFromServer.message);
          break;
        case 'question_created':
          if (dataFromServer.question_data && roomData) {
            console.log(dataFromServer.question_data);

            const listQuestion = roomData.room_question;
            listQuestion.push(dataFromServer.question_data);

            setroomData({
              ...roomData,
              room_question: listQuestion
            });
          }
          break;

        case 'notify_sale':
          toast.success('Se ha unido un nuevo usuario a la sala');
          break;
        case 'room_data':
          if (dataFromServer.room)
            setroomData(dataFromServer.room);
          break;
        case 'question_deleted':
          if (dataFromServer.question_id && roomData) {
            const listQuestion = roomData.room_question.filter(question => question.id !== dataFromServer.question_id);
            setroomData({
              ...roomData,
              room_question: listQuestion
            });
          }

        default:
          break;
      }
    };

    return () => {
      //socket.close();
    };

  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al montar el componente

  const sendMessage = () => {
    if (socket) {
      socket.send(JSON.stringify({
        type: 'chat_message',
        message: 'Hello, Server!'
      }));
    }
  };

  const handleSaveQuestion = (question: string, id?: string) => {
    if (socket) {
      socket.send(JSON.stringify({
        type: id ? 'update_question' : 'create_question',
        question,
        room: roomData?.id,
        [id ? 'question_id' : '']: id
      }));

    }
  };

  const [showModal, setShowModal] = React.useState(false);
  const [questionSelected, setquestionSelected] = useState<RoomQuestion | null>(null);

  return (
    <div>
      <CreateQuestionModal
        showModal={showModal}
        setShowModal={setShowModal}
        question={questionSelected}
        handleSaveQuestion={handleSaveQuestion}
      />
      <div className="grid grid-cols-3 gap-4 p-5 bg-gray-100 dark:bg-gray-900" style={{ height: 'calc(100vh - 2.5rem)' }}>
        <div className="col-span-3 sm:col-span-1 sm:col-start-1">
          <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            Conectado(a) a, <span className="text-blue-600 text-4xl">{roomData?.name}</span>
          </p>
        </div>
        <div className="col-span-3 sm:col-span-3 sm:col-start-2">
          <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex icentertems- justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Lista de preguntas
              </h5>
              <button
                className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                onClick={() => setShowModal(true)}
              >
                Crear pregunta
              </button>
            </div>
            <div className="flow-root">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                {
                  roomData?.room_question.map((question, index) => (
                    <li className="py-3 sm:py-4" key={question.id}>
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                        </div>
                        <button type="button" className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">
                          <svg className="w-[25px] h-[25px] text-red-800 dark:text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                          </svg>
                        </button>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium teNeil Simsxt-gray-900 truncate dark:text-white">
                            {question.question}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {question.created_at.toLocaleString()}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          Votos: {question.votes.approve} / {question.votes.disapprove}
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                            </svg>
                            <span className="sr-only">Icon description</span>
                          </button>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          <button type="button" className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                              <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                            </svg>
                            <span className="sr-only">Icon description</span>
                          </button>
                        </div>

                      </div>
                    </li>
                  ))

                }

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HomePage;