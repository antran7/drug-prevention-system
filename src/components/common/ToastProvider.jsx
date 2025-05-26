import React from 'react'
import { Toaster } from 'react-hot-toast'

const ToastProvider = ({ children }) => {
    return (
        <>
            {children}
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: "#333",
                        color: "#fff",
                    },
                }}
            />
        </>
    )
}

export default ToastProvider
