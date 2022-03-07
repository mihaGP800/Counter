import React, {ChangeEvent} from 'react';
import s from './InputStep.module.css'

type InputStepType = {
    startValue: number
    maxValue: number
    counterStep: number
    onChangeCounterStep: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputStep: React.FC<InputStepType> = ({startValue,maxValue,counterStep,onChangeCounterStep,...props}) => {
    return (
        <>
            <label htmlFor={'counterStep'} className={s.labelText}>counterStep</label>
            <input
                className={counterStep > 0 && (maxValue - startValue) % counterStep === 0 ? `${s.input} ${s.green}` : `${s.input} ${s.red}`}
                value={counterStep}
                onChange={onChangeCounterStep}
                type="number"
                id='counterStep'
                placeholder="введите значение счетчика"
            />
        </>
    );
}