import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Input.module.css'

type InputType = {
    labelTitle: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    id: string
    num: number
}

export const Input: React.FC<InputType> = ({labelTitle, id, placeholder, onChange, num, ...props}) => {
    return (
        <div>
            <label htmlFor={id}>{labelTitle}</label>
            <input className={num >= 0 ? s.input : s.inputInvalid}
                   onChange={onChange}
                   type="number"
                   id={id}
                   placeholder={placeholder}
            />
        </div>
    );
}