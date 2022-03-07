import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Tablo} from "./components/Tablo/Tablo";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel";
import {InputPanel} from "./components/InputPanel/InputPanel";
import {v1} from "uuid";

export type inputType = {
    labelTitle: string
    id: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [counterStep, setCounterStep] = useState<number>(1)
    let [num, setNum] = useState<number>(startValue)
    let [error, setError] = useState<string>('')

    useEffect(() => {
        const counterValueFromStorageAsString = localStorage.getItem('counterValue')
        if (counterValueFromStorageAsString) {
            setNum(JSON.parse(counterValueFromStorageAsString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(num))
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }, [num])

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) >= 0) {
            setError('enter values and press "set"')
        } else {
            setError('incorrect value')
        }
        setStartValue(Number(e.currentTarget.value))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) >= 0) {
            setError('enter values and press "set"')
        } else {
            setError('incorrect value')
        }
        setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeCounterStep = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) > 0) {
            setError('enter values and press "set"')
        } else {
            setError('incorrect value')
        }
        setCounterStep(Number(e.currentTarget.value))
    }

    // startValue < 0 || maxValue < 0 || counterStep < 0 || startValue >=maxValue && setError('incorrect value')


    const inputs: Array<inputType> = [
        {labelTitle: 'startValue', id: '1', placeholder: "введите начальное значение", onChange: onChangeStartValue},
        {labelTitle: 'maxValue', id: '2', placeholder: "введите максимум", onChange: onChangeMaxValue},
        {labelTitle: 'counterStep', id: '3', placeholder: "введите значение счетчика", onChange: onChangeCounterStep},
    ]

    const addInc = () => {
        num < maxValue && setNum(num + counterStep)
    }

    const reset = () => {
        setNum(startValue)
    }

    const set = () => {
        setNum(startValue)
        setMaxValue(maxValue)
        setCounterStep(counterStep)
        setError('')
    }

    return (
        <div className={'header'}>
            <Tablo num={num} error={error} maxValue={maxValue}/>
            <ButtonPanel addInc={addInc} reset={reset} set={set} num={num} maxValue={maxValue} startValue={startValue} counterStep={counterStep} error={error}/>
            <InputPanel inputs={inputs} num={num}/>

        </div>
    );
}

export default App;
