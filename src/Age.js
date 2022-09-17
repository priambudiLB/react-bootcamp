import { useEffect, useState } from "react"

function Age(props) {
    const counter = props.counter;
    const setCounter = props.setCounter;
    const [status, setStatus] = useState('Child')
    const addAge = () => {
        setCounter(prev => prev + 1)
    }

    const subAge = () => {
        setCounter(prev => prev - 1)
    }

    const resetAge = () => {
        setCounter(0)
    }

    useEffect(() => {
        if (counter >= 17) {
            setStatus('Adult')
        } else {
            setStatus('Child')
        }
    }, [counter])

    const age = counter;
    const name = `Bagaskara berumur ${age} tahun`;
    return <div>
        <h1>{name}</h1>
        <p>{status}</p>
        <button onClick={addAge}>+</button>
        <button onClick={resetAge}>RESET</button>
        <button onClick={subAge}>-</button>
    </div>
}

export default Age;