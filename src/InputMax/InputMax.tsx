import React, {ChangeEvent} from 'react';
import s from './InputMax.module.css'

type InputMaxType = {
    startValue: number
    maxValue: number
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputMax: React.FC<InputMaxType> = ({startValue, maxValue, onChangeMaxValue, ...props}) => {
    return (
        <>
            <label htmlFor={'maxValue'} className={s.labelText}>maxValue</label>
            <input className={(maxValue >= 0 && startValue < maxValue) ? `${s.input} ${s.green}` : `${s.input} ${s.red}`}
                   value={maxValue}
                   onChange={onChangeMaxValue}
                   type="number"
                   id='maxValue'
                   placeholder="введите максимум"
            />
        </>
    );
}