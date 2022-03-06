import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    title: string
    callBack: () => void
    disabledStatus: boolean
    className: string

}

export const Button: React.FC<ButtonType> = ({title, callBack, disabledStatus, className, ...props}) => {
    return (
        <button className={className} disabled={disabledStatus} onClick={callBack}>{title}</button>
    );
}