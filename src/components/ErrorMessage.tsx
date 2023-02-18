import React from 'react';

interface ErrorMessageProps {
    error: string;
}

export  function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p style={{textAlign: 'center', color: 'red'}}>{error}</p>
    );
}