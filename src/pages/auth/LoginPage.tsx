import React, { useState } from 'react'


import { faPlus, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from '../../components/Alert';


export const LoginPage = () => {
    const [createRoom, setcreateRoom] = useState<boolean>(false)


    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-800" style={{ height: 'calc(100vh - 2.5rem)' }}>

                <div className="bg-white rounded-lg shadow-xl p-10  dark:bg-gray-800">
                    <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
                        Login
                    </h2>
                    <div className="w-80">
                        <p className="mb-2 text-gray-900 font-light text-sm text-justify dark:text-gray-300">
                            Complete los campos para ingresar a la sala de votación o puede crear una nueva.
                        </p>
                    </div>
                    <form className="space-y-3  w-80">
                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    autoComplete='off'
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md min-h-10 h-8 border-2"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                                Contraseña
                            </label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md min-h-10 h-8 border-2"
                                />
                            </div>
                        </div>

                        <div className="flex items-center mt-4">
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                                Crear nueva sala
                            </label>
                            <div className="mt-1">
                                <input
                                    type="checkbox"
                                    autoComplete='off'
                                    name="createRoom"
                                    id="createRoom"
                                    className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md min-h-10 h-4 border-2 ml-2"
                                    onChange={() => setcreateRoom(!createRoom)}
                                />
                            </div>

                        </div>
                        <div className="border-t-2 bg-gray-400 dark:bg-gray-700 border-gray-300 dark:border-gray-600 w-80 mx-auto"></div>

                        {!createRoom && <div className="transform -translate-y-2 transition-all duration-200">
                            <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                                Codigo sala
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    autoComplete='off'
                                    name="codigo"
                                    id="codigo"
                                    className="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md min-h-10 h-8 border-2"
                                />
                            </div>

                        </div>}
                        <div>

                            <Alert
                                message='Error al ingresar a la sala'
                                type='error'
                            />
                        </div>
                        <div className="">
                            {/* Divider */}
                            <button
                                type="submit"
                                className="w-full mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-800 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:hover:bg-gray-600"
                            >
                                {
                                    createRoom ? 'Crear' : 'Ingresar'}
                                < FontAwesomeIcon icon={
                                    createRoom ? faPlus : faServer
                                } className="ml-2 pt-1" />
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default LoginPage;