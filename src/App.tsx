import React, {ChangeEvent} from 'react';
import './App.css';
import {Tablo} from './components/Tablo/Tablo';
import {ButtonPanel} from './components/ButtonPanel/ButtonPanel';
import {InputUniversal} from './InputUniversal/InputUniversal';
import s from './InputStart/InputStart.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './BLL/Store/store';
import {
    ActionTypes,
    chooseCounterStep,
    chooseMaxValue,
    chooseStartValue,
    incValue,
    resetValue,
    selectorCounterStep,
    selectorError,
    selectorMaxValue,
    selectorNum,
    selectorStartValue,
    showError
} from './BLL/Store/Counter-reducer';
import {Dispatch} from 'redux';

export type inputType = {
    labelTitle: string
    id: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function App() {

    let startValue = useSelector<AppStateType, number>(selectorStartValue)
    let maxValue = useSelector<AppStateType, number>(selectorMaxValue)
    let counterStep = useSelector<AppStateType, number>(selectorCounterStep)
    let num = useSelector<AppStateType, number>(selectorNum)
    let error = useSelector<AppStateType, string>(selectorError)

    const dispatch = useDispatch<Dispatch<ActionTypes>>()

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) < maxValue && counterStep > 0) {
            dispatch(showError('enter values and press "set"'))
        } else {
            dispatch(showError('incorrect Value'))
        }
        Number(e.currentTarget.value) >= 0 && (maxValue - Number(e.currentTarget.value)) % counterStep > 0 && dispatch(showError('incorrect CounterStep'))
        dispatch(chooseStartValue(Number(e.currentTarget.value)))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) >= 0 && Number(e.currentTarget.value) > startValue && startValue >= 0 && counterStep > 0) {
            dispatch(showError('enter values and press "set"'))
        } else {
            dispatch(showError('incorrect Value'))
        }
        (Number(e.currentTarget.value) - startValue) % counterStep > 0 && dispatch(showError('incorrect CounterStep'))

        dispatch(chooseMaxValue(Number(e.currentTarget.value)))
    }

    const onChangeCounterStep = (e: ChangeEvent<HTMLInputElement>) => {
        if (Number(e.currentTarget.value) > 0 && (maxValue - startValue) % Number(e.currentTarget.value) === 0 && startValue >= 0 && maxValue > 0 && startValue !== maxValue) {
            dispatch(showError('enter values and press "set"'))
        } else {
            dispatch(showError('incorrect Value'))
        }
        dispatch(chooseCounterStep(Number(e.currentTarget.value)))
    }

    const addInc = () => {
        num < maxValue && dispatch(incValue())
    }

    const reset = () => {
        dispatch(resetValue())
    }

    const set = () => {
        dispatch(resetValue())
        dispatch(chooseMaxValue(maxValue))
        dispatch(chooseCounterStep(counterStep))
        dispatch(showError(''))
    }

    const classNameInputStart = startValue >= 0 && startValue < maxValue ? `${s.input} ${s.green}` : `${s.input} ${s.red}`
    const classNameInputMax = maxValue >= 0 && startValue < maxValue ? `${s.input} ${s.green}` : `${s.input} ${s.red}`
    const classNameInputStep = counterStep > 0 && (maxValue - startValue) % counterStep === 0 ? `${s.input} ${s.green}` : `${s.input} ${s.red}`

    return (
        <div className={'header'}>
            <Tablo num={num} error={error} maxValue={maxValue}/>
            <ButtonPanel addInc={addInc} reset={reset} set={set} num={num} maxValue={maxValue}
                         startValue={startValue}
                         counterStep={counterStep} error={error}/>
            <InputUniversal id={'startValue'}
                            value={startValue}
                            onChange={onChangeStartValue}
                            classNameInput={classNameInputStart}/>
            <InputUniversal id={'maxValue'}
                            value={maxValue}
                            onChange={onChangeMaxValue}
                            classNameInput={classNameInputMax}/>
            <InputUniversal id={'counterStep'}
                            value={counterStep}
                            onChange={onChangeCounterStep}
                            classNameInput={classNameInputStep}/>
        </div>
    );
}

export default App;
