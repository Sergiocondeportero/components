// src/components/Label.js
import React from 'react';

export default function Label({ htmlFor, text }) {
    return (
        <label htmlFor={htmlFor}>{text}</label>
    );
}
