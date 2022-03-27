import React, {ChangeEvent} from 'react';
import s from './Tablo.module.css'
import {InputStart} from '../../InputStart/InputStart';
import {InputMax} from '../../InputMax/InputMax';
import {InputStep} from '../../InputStep/InputStep';

type TabloType = {
    num: number
    maxValue: number
    error: string
    startValue: number
    counterStep: number
    toggle: boolean
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeCounterStep: (e: ChangeEvent<HTMLInputElement>) => void


}

export const Tablo: React.FC<TabloType> = ({
                                               num,
                                               startValue,
                                               counterStep,
                                               maxValue,
                                               error,
                                               toggle,
                                               onChangeStartValue,
                                               onChangeMaxValue,
                                               onChangeCounterStep,
                                               ...props
                                           }) => {
    return (

        <>
            {/*{error*/}
            {/*    ? <div*/}
            {/*        className={error.includes('incorrect') ? `${s.tablo} ${s.errorText} ${s.red}` : `${s.tablo} ${s.errorText}`}>{error}</div>*/}
            {/*    :*/}
            {/*    <div className={num === maxValue ? `${s.tablo} ${s.tabloMaxValue}` : s.tablo}>*/}
            {/*        {num}*/}
            {/*    </div>*/}
            {/*}*/}
            {toggle
                ? <div className={num === maxValue ? `${s.tablo} ${s.tabloMaxValue}` : s.tablo}>
                    {num}
                </div>
                : <div className={`${s.tablo} ${s.settings}`}>
                    <InputStart startValue={startValue} maxValue={maxValue} onChangeStartValue={onChangeStartValue}/>
                    <InputMax startValue={startValue} maxValue={maxValue} onChangeMaxValue={onChangeMaxValue}/>
                    <InputStep startValue={startValue} maxValue={maxValue} counterStep={counterStep}
                               onChangeCounterStep={onChangeCounterStep}/>
                </div>}
        </>
    );
}