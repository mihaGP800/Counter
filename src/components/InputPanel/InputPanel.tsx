import React, {ChangeEvent} from 'react';
import s from './InputPanel.module.css'
import {Input} from "../Input/Input";
import {inputType} from "../../App";

type InputPanelType = {
    setStartValue: (startValue: number) => void
    startValue: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    inputs: Array<inputType>
}

export const InputPanel: React.FC<InputPanelType> = ({inputs, startValue, setStartValue, onChange, ...props}) => {
    return (
        <div className={s.InputPanel}>
            {inputs.map(i => {
                return <Input labelTitle={i.labelTitle}
                              startValue={startValue}
                              setStartValue={setStartValue}
                              onChange={onChange}
                              id={i.id}
                              placeholder={i.placeholder}
                />
            })}


            {/*<label htmlFor="start">startValue</label>*/}
            {/*<input type="number" id="start" placeholder="введите начальное значение"/>*/}

            {/*<label htmlFor="max">maxValue</label>*/}
            {/*<input type="number" id="max" placeholder="введите максимум"/>*/}

            {/*<label htmlFor="inputID">counterStep</label>*/}
            {/*<input type="number" id="inputID" placeholder="введите значение счетчика"/>*/}
        </div>
    );
}