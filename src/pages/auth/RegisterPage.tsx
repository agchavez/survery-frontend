import { faEnvelope, faEye, faEyeSlash, faKey, faLock, faMailBulk, faPlus, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputLocal } from '../../components/InputLocal';
import { ButtomLocal } from '../../components/ButtomLocal';


type RegisterForm = {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}
export const RegisterPage = () => {
    const [showPassword, setshowPassword] = useState<boolean>(false);

    const schema = yup.object().shape({
        first_name: yup.string().required("El nombre es requerido"),
        last_name: yup.string().required("El apellido es requerido"),
        email: yup.string().email("El email no es válido").required("El email es requerido"),
        password: yup.string().required("La contraseña es requerida").min(6, "La contraseña debe tener al menos 6 caracteres")
    });

    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: RegisterForm) => {
        console.log(data);
        reset();
    }

    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900" style={{ height: 'calc(100vh - 2.5rem)' }}>

                <div className="bg-white rounded-lg shadow-xl p-10  dark:bg-gray-800">
                    <h2 className="text-4xl mb-6 text-center text-gray-800 dark:text-white">
                        Registro
                    </h2>
                    <div className="w-80">
                        <p className="mb-2 text-gray-900 font-light text-sm text-justify dark:text-gray-300">
                            Complete los campos para ingresar a la sala de votación o puede crear una nueva.
                        </p>
                    </div>
                    <form className="space-y-3  w-80" onSubmit={handleSubmit(onSubmit)}>
                        <InputLocal
                            label="Nombre"
                            type="text"
                            placeholder="Gabriel"
                            id='first_name'
                            icon={faUser}
                            name="first_name"
                            autoComplete='off'
                            error={errors.first_name?.message}
                            register={{
                                ...register("first_name")
                            }}
                            className=''
                            labelClassName=''


                        />
                        
                        <InputLocal
                            label="Apellido"
                            type="text"
                            placeholder="Chavez"
                            id='last_name'
                            icon={faUser}
                            name="last_name"
                            autoComplete='off'
                            error={errors.last_name?.message}
                            register={{
                                ...register("last_name")
                            }}
                            className=''
                            labelClassName=''


                        />
                        <InputLocal
                            label="Correo"
                            type="text"
                            placeholder="agchavez@gmail.com"
                            id='email-register'
                            icon={faEnvelope}
                            autoComplete='off'
                            error={errors.email?.message}
                            register={{
                                ...register("email")
                            }}
                            name="email-register"
                            className=''
                            labelClassName=''
                        />
                        
                        <InputLocal
                            label="Contraseña"
                            type={showPassword ? "text" : "password"}
                            placeholder="contraseña"
                            id='password-input'
                            icon={faKey}
                            name="password"
                            autoComplete='off'
                            error={errors.password?.message}
                            register={{
                                ...register("password")
                            }}
                            className=''
                            labelClassName=''
                            endIcon={showPassword ? faEyeSlash : faEye}
                            onIconClick={() => setshowPassword(!showPassword)}
                        />
                        
                        <div className="">
                            {/* Divider */}
                            <ButtomLocal
                                type="submit"
                                label="Registrarse"
                                loading={false}
                                disabled={false}
                                icon={faUserPlus}
                                className="w-full"
                            />

                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}


export default RegisterPage;