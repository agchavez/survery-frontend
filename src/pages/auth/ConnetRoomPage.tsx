import { faPeopleRoof, faRightToBracket, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export const ConnetRoomPage = () => {
    const [createRoom, setcreateRoom] = useState<boolean>(false)
    
    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900" style={{ height: 'calc(100vh - 2.5rem)' }}>

                <div className="bg-white rounded-lg shadow-xl p-10  dark:bg-gray-800">
                    <h2 className="text-4xl mb-6 text-center text-gray-800 dark:text-white">
                        Conectar a una sala
                    </h2>
                    <div className="w-80">
                        <p className="mb-2 text-gray-900 font-light text-sm text-justify dark:text-gray-300">
                            Para conectarse a una sala, ingrese el codigo de la sala y su nombre.
                        </p>
                    </div>
                    <form className="space-y-3  w-80">
                        <div>
                            <label form="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Codigo
                            </label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FontAwesomeIcon
                                        icon={faPeopleRoof}
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Testing"
                                    required />
                            </div>
                        </div>
                        <div>

                            <label
                                form="last_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Nombre
                            </label>
                            <div className="relative w-full">

                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    />
                                </div>
                                <input
                                    type="text"
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Chavez"
                                    required />
                            </div>
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Well done!</span> Some success message.</p>
                        </div>

                        <div className="">
                            {/* Divider */}
                            <button
                                type="submit"
                                className="w-full mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                Ingresar
                                < FontAwesomeIcon icon={
                                    faRightToBracket
                                } className="ml-2 pt-1" />
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}


export default ConnetRoomPage;