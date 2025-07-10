import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginForm, useLoginValidation } from './useLoginValidation';

export const useLoginForm = () => {
    const [submitError, setSubmitError] = useState<string>('');
    const { schema } = useLoginValidation();

    const form = useForm<LoginForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: '',
            createRoom: false,
            roomCode: ''
        }
    });

    const onSubmit = async (data: LoginForm) => {
        try {
            setSubmitError('');
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(data);
            // Handle successful login here
        } catch (error) {
            setSubmitError('Error al ingresar a la sala. Verifique sus credenciales.');
        }
    };

    const clearSubmitError = () => setSubmitError('');

    return {
        ...form,
        onSubmit,
        submitError,
        clearSubmitError
    };
};