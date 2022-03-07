import React, {ChangeEvent} from 'react';
import s from './InputPanel.module.css'
import {Input} from "../Input/Input";
import {inputType} from "../../App";

type InputPanelType = {
    inputs: Array<inputType>
    num:number
}

export const InputPanel: React.FC<InputPanelType> = ({inputs,num, ...props}) => {
    return (
        <div className={s.input}>
            {inputs.map(i => {
                return <Input
                    key={i.id}
                    id={i.id}
                    labelTitle={i.labelTitle}
                    onChange={i.onChange}
                    placeholder={i.placeholder}
                    num={num}
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