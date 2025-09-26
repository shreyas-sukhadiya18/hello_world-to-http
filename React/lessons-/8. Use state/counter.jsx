import React,{useState} from "react"

function Counter(){
    const [count, setCount] = useState(0);

    const increment =() =>{
        setCount(count +1)
    }

    const decrement = ()=> {
        setCount(count - 1)
    }
    const reset = ()=> {
        setCount(0)
    }

    return (
        
        <div className="counter-container">
                <p className="count-display">counter:{count} </p>
                <button className="counter-incr" onClick={increment}>Incr</button>
                <button className="counter-incr" onClick={reset}>reset</button>
                <button className="counter-incr" onClick={decrement}>Decr</button>
        </div>

    )

}

export default Counter