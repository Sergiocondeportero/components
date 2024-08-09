import React from 'react';
export default function Input({ type, name, id, maxlength }) {
    return (
        <input 
            type={type}
            name={name}
            id={id}
            maxlength={maxlength}
        />
    );
}


