import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Input.module.css'

type InputType = {
    labelTitle:string
    setStartValue: (startValue: number) => void
    startValue: number
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void
    placeholder:string
    id:number
}

export const Input: React.FC<InputType> = ({labelTitle,placeholder,id,startValue, setStartValue,onChange, ...props}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }
    // const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    //     // e.key === 'Enter' &&
    // }

    return (
        <div className={s.input}>
            <label htmlFor="start">{labelTitle}</label>
            <input
                // value={startValue}
                onChange={onChangeHandler}
                // onKeyPress={onKeyPress}
                type="number"
                // id={id}
                placeholder={placeholder}/>
        </div>
    );
}