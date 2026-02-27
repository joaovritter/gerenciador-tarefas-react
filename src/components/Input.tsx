import React from 'react';

interface InputProps {
    type: string,
    placeholder: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <input
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;