import React from 'react';
import {Button} from "../Buttton/Button";
import s from './ButtonPanel.module.css'

type FunctionPanelType = {
    addInc: () => void
    reset: () => void
    num: number
    maxValue:number
    startValue:number

}

export const ButtonPanel: React.FC<FunctionPanelType> = ({addInc, reset, num,maxValue,startValue, ...props}) => {

    const classNameButton = s.buttonInc
    return (
        <div className={s.panel}>
            <Button className={classNameButton} title={'inc'} callBack={addInc} disabledStatus={num === maxValue}/>
            <Button className={classNameButton} title={'reset'} callBack={reset} disabledStatus={num === startValue}/>
        </div>
    );
}