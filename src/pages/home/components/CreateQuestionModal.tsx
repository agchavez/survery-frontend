import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form';
import { RoomQuestion } from '../../../interfaces/question';

type Inputs = {
    question: string
}

type Props = {
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    question: RoomQuestion | null;
    handleSaveQuestion: (question: string, id?: string) => void;
}


export const CreateQuestionModal: FC<Props> = ({ showModal, setShowModal, question, handleSaveQuestion }) => {
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
    
    const onSubmit = (data: Inputs) => {
        handleSaveQuestion(data.question, question?.id);
        setShowModal(false);
    }
      
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button 
                                    type="button" 
                                    onClick={() => setShowModal(false)}
                                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="px-6 py-6 lg:px-8">
                                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                        {question ? 'Editar pregunta' : 'Crear pregunta'}
                                    </h3>
                                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Pregunta
                                            </label>
                                            <input 
                                                type="text" 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                                                {...register('question', { required: true })}
                                                required />
                                        </div>
                                        <button 
                                            type="submit" 
                                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                            {question ? 'Editar' : 'Crear'}
                                            </button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
