import React from 'react';
import '../App.module.css';
import s from './Counter.module.css'
import SuperButton from "./SuperButton/SuperButton";


export type CounterPropsType = {
    counter: number
    setCounter: (count: number) => void
    maxValue: number
    startValue: number
    error1: string
    error2: string
    text: string | null
}
export const Counter = (props: CounterPropsType) => {
    const onClickHandlerInc = () => {
        props.setCounter(props.counter + 1)
    }
    const onClickHandlerReset = () => {
        props.setCounter(0)
    }
    return (
        <div>
            <div className={s.Rectangle}>
                <div className={props.counter === props.maxValue ? s.Count : s.Count1}>{props.error1 || props.error2
                    ? <span>Incorrect value</span>
                    : props.text ? props.text : props.counter }
                </div>
                <div className={s.Buttons}>
                    <SuperButton
                        disabled={props.counter === props.maxValue} onClick={onClickHandlerInc}
                    >
                        inc
                    </SuperButton>
                    <SuperButton
                        disabled={props.counter === props.startValue}
                        onClick={onClickHandlerReset}
                    >
                        reset
                    </SuperButton>
                </div>
            </div>
        </div>

    )
}


