import React, {ChangeEvent} from 'react';
import s from './InputStart.module.css'

type InputStartType = {
    startValue: number
    maxValue: number
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputStart: React.FC<InputStartType> = ({startValue, maxValue, onChangeStartValue, ...props}) => {
    return (
        <>
            <label htmlFor={'startValue'} className={s.labelText}>startValue</label>
            <input className={startValue >= 0 && startValue < maxValue ? `${s.input} ${s.green}` : `${s.input} ${s.red}`}
                   value={startValue}
                   onChange={onChangeStartValue}
                   type="number"
                   id='startValue'
                   placeholder="введите начальное значение"
            />

        </>
    );
}