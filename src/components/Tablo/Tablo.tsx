import React from 'react';
import s from './Tablo.module.css'

type TabloType = {
    num: number
    startValue: number
}

export const Tablo: React.FC<TabloType> = ({num,startValue, ...props}) => {
    return (
        <div className={num === 5 ? `${s.tablo} ${s.tabloError}` : s.tablo}>
            {num}
        </div>
    );
}