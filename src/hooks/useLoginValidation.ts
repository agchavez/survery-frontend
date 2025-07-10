import * as yup from "yup";

export type LoginForm = {
    email: string;
    password: string;
    createRoom: boolean;
    roomCode?: string;
};

export const useLoginValidation = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email("Ingrese un email válido")
            .required("El email es requerido"),
        password: yup
            .string()
            .required("La contraseña es requerida")
            .min(6, "La contraseña debe tener al menos 6 caracteres"),
        createRoom: yup.boolean(),
        roomCode: yup.string().when('createRoom', {
            is: true,
            then: (schema) => schema.required("El código de sala es requerido"),
            otherwise: (schema) => schema.notRequired()
        })
    });

    return { schema };
};