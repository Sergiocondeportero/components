// src/components/Select.js
import React from 'react';

export default function Select({ name, id, options }) {
    return (
        <select name={name} id={id}>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    );
}
