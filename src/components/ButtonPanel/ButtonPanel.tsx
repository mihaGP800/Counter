import React from 'react';
import {Button} from "../Buttton/Button";
import s from './ButtonPanel.module.css'

type FunctionPanelType = {
    addInc: () => void
    reset: () => void
    set: () => void
    num: number
    maxValue: number
    startValue: number
    counterStep: number
    error: string
    toggle: boolean
}

export const ButtonPanel: React.FC<FunctionPanelType> = (
    {addInc, reset, set, num, maxValue, startValue, counterStep, error,toggle, ...props}) => {

    const classNameButton = s.buttonInc
    return (
        <div className={s.panel}>
            <Button className={classNameButton} title={'inc'} callBack={addInc}
                    disabledStatus={num === maxValue || !!error || !toggle}/>
            <Button className={classNameButton} title={'reset'} callBack={reset}
                    disabledStatus={num === startValue || !!error}/>
            <Button className={classNameButton} title={'set'} callBack={set}
                    disabledStatus={startValue < 0 || maxValue < 0 || counterStep <= 0 || startValue >= maxValue || (maxValue - startValue) % counterStep !== 0}/>
        </div>
    );
}