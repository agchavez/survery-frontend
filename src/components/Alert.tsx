import React, { FC } from 'react'

type AlertType = 'success' | 'error' | 'info' | 'warning'

interface AlertProps {
    type: AlertType
    message: string
    showIcon?: boolean
    showCloseButton?: boolean
}

interface ColorMap {
    bg: string
    text: string
    border: string
}

const alertTypeToColor = (type: AlertType): ColorMap => {
    switch (type) {
        case 'success':
            return {
                bg: 'bg-green-50',
                text: 'text-green-600',
                border: 'border-green-500',
            }
        case 'error':
            return {
                bg: 'bg-red-100',
                text: 'text-red-600',
                border: 'border-red-500',
            }
        case 'info':
            return {
                bg: 'bg-blue-50',
                text: 'text-blue-600',
                border: 'border-blue-500',
            }
        case 'warning':
            return {
                bg: 'bg-yellow-50',
                text: 'text-yellow-600',
                border: 'border-yellow-500',
            }
    }
}


export const Alert: FC<AlertProps> = ({ type, message, showIcon = true, showCloseButton = true }) => {
    return (
        <section className="">
            <div className="relative items-center px-2 w-full mx-auto">
                <div className={`p-6 border-l-4 rounded-md ${alertTypeToColor(type).bg} ${alertTypeToColor(type).border}`}>
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className={`w-5 h-5 ${alertTypeToColor(type).text}`}
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="ml-3">
                            <div className={`text-sm font-medium ${alertTypeToColor(type).text}`}>
                                <p>
                                    {message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
