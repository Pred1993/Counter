import SuperButton from "./SuperButton/SuperButton";
import React from "react";
import SuperInput from "./SuperInput/SuperInput";
import s from './Setting.module.css'

export type SettingPropsType = {
    counter: number
    maxValue: number
    startValue: number
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    changeCounter: () => void
    error1: string | null
    setError1: (error: string) => void
    error2: string | null
    setError2: (error: string) => void
    setText: (text: string | null) => void
}
export const Setting = (props: SettingPropsType) => {

    const onClickHandlerSetMax = (value: number) => {
        props.setMaxValue(value)
    }
    const onClickHandlerSetStart = (value: number) => {
        props.setStartValue(value)
    }
    const onClickHandlerSet = () => {
        props.setText(null)
        localStorage.setItem('max-Value', JSON.stringify(props.maxValue))
        localStorage.setItem('start-Value', JSON.stringify(props.startValue))
        props.changeCounter()
    }
    return (
        <div>
            <div className={s.setting}>
                <div className={s.input}>
                    <div className={s.maxValue}><span className={s.textMax}>max value:   </span>
                        <SuperInput type={"number"}
                                    value={props.maxValue}
                                    onChangeNumber={onClickHandlerSetMax}
                                    error={props.error1}
                        /></div>
                    <div className={s.startValue}><span className={s.textStart}>start value: </span>
                        <SuperInput type={"number"}
                                    value={props.startValue}
                                    onChangeNumber={onClickHandlerSetStart}
                                    error={props.error2}
                        /></div>
                </div>
                <div className={s.button}>
                    <SuperButton
                        disabled={props.startValue < 0 || props.maxValue < 0 || props.maxValue <= props.startValue }
                        onClick={onClickHandlerSet}
                    >
                        set
                    </SuperButton>
                </div>
            </div>
        </div>

    )
}