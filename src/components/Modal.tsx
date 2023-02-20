import React from "react";

interface ModalProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

export function Modal({children, title, onClose}: ModalProps) {
    return (
        <>
            <div onClick={onClose} style={{background: "black", opacity: "0.5", position: "fixed", top:0, bottom: '0', left: '0', right: '0'}}>

            </div>
            {/*<div style={{width: '500px', padding: '5', borderRadius: '5px',  background: 'white', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)'}}>*/}
            <div style={{width: '500px', padding: '5', borderRadius: '5px',  background: 'white', position: 'fixed', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)'}}>
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
}