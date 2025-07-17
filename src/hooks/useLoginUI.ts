import { useState, useEffect } from 'react';

export const useLoginUI = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return {
        showPassword,
        togglePasswordVisibility
    };
};