import React, {ChangeEvent} from 'react';
import s from './InputUniversal.module.css'

type InputStartType = {
    id: string
    classNameInput: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputUniversal: React.FC<InputStartType> = ({classNameInput,value,onChange,id, ...props}) => {
    return (
        <>
            <label htmlFor={id} className={s.labelText}>{id}</label>
            <input
                className={classNameInput}
                value={value}
                onChange={onChange}
                type="number"
                id={id}
            />

        </>
    );
}