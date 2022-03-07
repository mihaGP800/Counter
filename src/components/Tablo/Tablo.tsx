import React from 'react';
import s from './Tablo.module.css'

type TabloType = {
    num: number
    maxValue: number
    error: string

}

export const Tablo: React.FC<TabloType> = ({num, error, maxValue, ...props}) => {
    return (

        <>
            {error
                ? <div className={`${s.tablo} ${s.errorText}`}>{error}</div>
                :
                <div className={num === maxValue ? `${s.tablo} ${s.tabloMaxValue}` : s.tablo}>
                    {num}
                </div>
            }
        </>
    );
}