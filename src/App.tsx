import React, {useEffect, useState} from 'react';
import './App.module.css';
import {Counter} from "./Counter/Сounter ";
import {Setting} from "./Counter/Setting";
import s from './App.module.css'

function App() {
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(startValue)
    const [error1, setError1] = useState<string>('')
    const [error2, setError2] = useState<string>('')
    const [text, setText] = useState<string | null>(null)

    useEffect(() => {
        let getStartValue = localStorage.getItem('start-Value')
        if (getStartValue) {
            let newStartValue = JSON.parse(getStartValue)
            setCounter(newStartValue)
            setStartValue(newStartValue)
        }
        let getMaxValue = localStorage.getItem('max-Value')
        if (getMaxValue) {
            let newMaxValue = JSON.parse(getMaxValue)
            setMaxValue(newMaxValue)
    }}, [])
    useEffect(() => {
        if (maxValue < 0 || maxValue <= startValue) {
            setText('enter values and press "set"')
            setError1('Incorrect value')
        } else {
            setError1('')
            setError2('')
        }
    }, [maxValue, startValue])

    useEffect(() => {
        setText('enter values and press "set"')
        if (startValue < 0 || maxValue <= startValue) {
            setError2('Incorrect value')
        } else {
            setError2('')
            setError1('')
        }
    }, [maxValue, startValue])

    const changeCounter = () => {
        let getStartValue = localStorage.getItem('start-Value')
        if (getStartValue) {
            let newStartValue = JSON.parse(getStartValue)
            setCounter(newStartValue)
        }
    }
    return (
        <div className={s.screen}>
            <div className={s.column}>
                <Setting
                counter={counter}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                startValue={startValue}
                changeCounter={changeCounter}
                error1={error1}
                setError1={setError1}
                error2={error2}
                setError2={setError2}
                setText={setText}
            />
                <Counter
                    counter={counter}
                    setCounter={setCounter}
                    maxValue={maxValue}
                    startValue={startValue}
                    error1={error1}
                    error2={error2}
                    text={text}
                /></div>
        </div>

    );
}

export default App;
