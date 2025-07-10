import React from 'react'
import { faEnvelope, faEye, faEyeSlash, faKey, faPlus, faServer, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { InputLocal } from '../../components/InputLocal';
import { ButtomLocal } from '../../components/ButtomLocal';
import { Alert } from '../../components/Alert';
import { useLoginForm, useLoginUI } from '../../hooks';

export const LoginPage = () => {
    const { 
        register, 
        handleSubmit, 
        watch, 
        formState: { errors, isSubmitting }, 
        onSubmit, 
        submitError 
    } = useLoginForm();
    
    const { 
        showPassword, 
        togglePasswordVisibility 
    } = useLoginUI();

    const watchCreateRoom = watch("createRoom");


    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900" style={{ height: 'calc(100vh - 2.5rem)' }}>
                <div className="bg-white rounded-lg shadow-xl p-10 dark:bg-gray-800 transform transition-all duration-300 hover:shadow-2xl">
                    <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                        Iniciar Sesión
                    </h2>
                    <div className="w-80">
                        <p className="mb-6 text-gray-600 font-light text-sm text-center dark:text-gray-300">
                            Complete los campos para ingresar a la sala de votación o puede crear una nueva.
                        </p>
                    </div>
                    <form className="space-y-4 w-80" onSubmit={handleSubmit(onSubmit)}>
                        <InputLocal
                            label="Correo Electrónico"
                            type="email"
                            placeholder="ejemplo@correo.com"
                            id='email'
                            icon={faEnvelope}
                            name="email"
                            autoComplete='on'
                            error={errors.email?.message}
                            register={{
                                ...register("email")
                            }}
                            className=''
                            labelClassName=''
                        />
                        
                        <InputLocal
                            label="Contraseña"
                            type={showPassword ? "text" : "password"}
                            placeholder="Ingrese su contraseña"
                            id='password'
                            icon={faKey}
                            name="password"
                            autoComplete='on'
                            error={errors.password?.message}
                            register={{
                                ...register("password")
                            }}
                            className=''
                            labelClassName=''
                            endIcon={showPassword ? faEyeSlash : faEye}
                            onIconClick={togglePasswordVisibility}
                        />

                        <div className="flex items-center space-x-3 pt-2">
                            <input
                                type="checkbox"
                                id="createRoom"
                                {...register("createRoom")}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="createRoom" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                Crear nueva sala
                            </label>
                        </div>

                        {watchCreateRoom && (
                            <div className="transform transition-all duration-300 ease-in-out">
                                <InputLocal
                                    label="Código de Sala"
                                    type="text"
                                    placeholder="Ingrese el código de la sala"
                                    id='roomCode'
                                    icon={faServer}
                                    name="roomCode"
                                    autoComplete='off'
                                    error={errors.roomCode?.message}
                                    register={{
                                        ...register("roomCode")
                                    }}
                                    className=''
                                    labelClassName=''
                                />
                            </div>
                        )}

                        {submitError && (
                            <div className="transform transition-all duration-300 ease-in-out">
                                <Alert
                                    message={submitError}
                                    type='error'
                                />
                            </div>
                        )}

                        <div className="pt-4">
                            <ButtomLocal
                                type="submit"
                                label={watchCreateRoom ? 'Crear Sala' : 'Ingresar'}
                                loading={isSubmitting}
                                disabled={isSubmitting}
                                icon={watchCreateRoom ? faPlus : faSignInAlt}
                                className="w-full"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;