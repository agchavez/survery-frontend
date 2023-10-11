
import { icon } from '@fortawesome/fontawesome-svg-core'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface InputLocalProps {
    label: string,
    type: string,
    name: string,
    id: string,
    placeholder: string,
    className: string,
    labelClassName: string,
    autoComplete: 'on' | 'off',
    icon?: IconProp,
    disabled?: boolean,
    register: any,
    error?: any,
    endIcon?: IconProp,
    onIconClick?: () => void

}
export const InputLocal: React.FC<InputLocalProps> = (
    { label, type, name, id, autoComplete, labelClassName, className, placeholder, disabled = false, icon, error, register, endIcon, onIconClick }) => {

    return (
        <>
            <div>
                <label
                    form="last_name"
                    className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${labelClassName} ${error ? 'text-red-500 dark:text-red-500'  : ''}`}>
                    {label}
                </label>
                <div className="relative w-full">

                    {icon && <div className={`absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ${error ? 'text-red-500 dark:text-red-500' : ''}`}>
                        <FontAwesomeIcon
                            icon={icon}
                            className={`w-5 h-5 text-gray-500 dark:text-gray-400 ${error ? 'text-red-500 dark:text-red-500' : ''}`}
                        />
                    </div>}
                    <input
                        type={type}
                        id={id}
                        name={name}
                        autoComplete={autoComplete}
                        disabled={disabled}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  ${className} ${error ? 'border-red-500 dark:border-red-500 ' : ''}`}
                        placeholder={placeholder}
                        {...register}
                    />
                    {endIcon && <button
                        onClick={() => endIcon && onIconClick && onIconClick()}
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                    >
                        <FontAwesomeIcon
                            icon={endIcon}
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        />
                    </button>}
                </div>
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    {error}
                </p>
            </div >



        </>
    )
}
