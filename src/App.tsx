import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Tablo} from "./components/Tablo/Tablo";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel";
import {InputPanel} from "./components/InputPanel/InputPanel";

export type inputType = {
    labelTitle: string
    id: number
    placeholder: string
}

type inputsType = Array<inputType>

function App() {

    // const maxValue = 5
    // const startValue = 0
    // const counterStep = 1

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [counterStep, setCounterStep] = useState<number>(1)
    let [num, setNum] = useState<number>(startValue)

        const inputs: Array<inputType> = [
        {labelTitle: 'startValue', id: 1, placeholder: "введите начальное значение"},
        {labelTitle: 'maxValue', id: 2, placeholder: "введите максимум"},
        {labelTitle: 'counterStep', id: 3, placeholder: "введите значение счетчика"},
    ]

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.currentTarget.value))
    }

    const addInc = () => {
        num < maxValue && setNum(num + counterStep)
    }

    const reset = () => {
        setNum(startValue)
    }

    return (
        <div className={'header'}>
            <Tablo num={num} startValue={startValue}/>
            <ButtonPanel addInc={addInc} reset={reset} num={num} maxValue={maxValue} startValue={startValue}/>
            <InputPanel inputs={inputs} startValue={startValue} setStartValue={setStartValue} onChange={onChange}/>
        </div>
    );
}

export default App;
