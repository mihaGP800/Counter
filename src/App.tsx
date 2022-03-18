import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Tablo} from "./components/Tablo/Tablo";
import {ButtonPanel} from "./components/ButtonPanel/ButtonPanel";
import {InputStart} from "./InputStart/InputStart";
import {InputMax} from "./InputMax/InputMax";
import {InputStep} from "./InputStep/InputStep";

export type inputType = {
    labelTitle: string
    id: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(3)
    let [counterStep, setCounterStep] = useState<number>(1)
    let [num, setNum] = useState<number>(startValue)
    let [error, setError] = useState<string>('')

    useEffect(() => {
        const localNumAsString = localStorage.getItem('counterNum')
        const localStartAsString = localStorage.getItem('counterStartValue')
        const localMaxAsString = localStorage.getItem('counterMaxValue')
        const localStepAsString = localStorage.getItem('counterStepValue')

        if (localNumAsString) {
            setNum(JSON.parse(localNumAsString))
        }
        if (localStartAsString) {
            setStartValue(JSON.parse(localStartAsString))
        }
        if (localMaxAsString) {
            setMaxValue(JSON.parse(localMaxAsString))
        }
        if (localStepAsString) {
            setCounterStep(JSON.parse(localStepAsString))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterNum', JSON.stringify(num))
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
        localStorage.setItem('counterStepValue', JSON.stringify(counterStep))
    }, [num])

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) < maxValue) {
            setError('enter values and press "set"')
        } else {
            setError('incorrect Value')
        }
        (maxValue - Number(e.currentTarget.value)) % counterStep !== 0 && setError('incorrect CounterStep')
        setStartValue(Number(e.currentTarget.value))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) > startValue && startValue >= 0) {
            setError('enter values and press "set"')
        } else {
            setError('incorrect Value')
        }
        (Number(e.currentTarget.value) - startValue) % counterStep !== 0 && setError('incorrect Value')


        setMaxValue(Number(e.currentTarget.value))
    }

    const onChangeCounterStep = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) > 0 && (maxValue - startValue) % Number(e.currentTarget.value) === 0 && startValue > 0 && maxValue > 0 && startValue !== maxValue) {
            setError('enter values and press "set"')
        } else {
            setError('incorrect Value')
        }
        setCounterStep(Number(e.currentTarget.value))
    }

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
            <ButtonPanel addInc={addInc} reset={reset} set={set} num={num} maxValue={maxValue} startValue={startValue}
                         counterStep={counterStep} error={error}/>
            <InputStart startValue={startValue} maxValue={maxValue} onChangeStartValue={onChangeStartValue}/>
            <InputMax startValue={startValue} maxValue={maxValue} onChangeMaxValue={onChangeMaxValue}/>
            <InputStep startValue={startValue} maxValue={maxValue} counterStep={counterStep}
                       onChangeCounterStep={onChangeCounterStep}/>
        </div>
    );
}

export default App;
