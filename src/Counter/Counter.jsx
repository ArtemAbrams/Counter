import './Counter.css'
import React, {useState} from "react";
import CounterButton from "./CounterButton";

export default function Count(){
    const [count, setCount] = useState(0);
    function increment(by){
        return(
            setCount(count + by)
        );
    }
    function decrement(by){
        return(
            setCount(count - by)
        );
    }
    function reset(){
        return(
            setCount(0)
        );
    }
    return (
        <>
            <span className="count"> {count} </span>
            <CounterButton by = {1} incrementMethod={increment} decrementMethod={decrement}/>
            <CounterButton by = {2} incrementMethod={increment} decrementMethod={decrement}/>
            <CounterButton by = {3} incrementMethod={increment} decrementMethod={decrement}/>
            <div>
                <button className="resetButton" onClick={reset}> Reset </button>
            </div>
        </>
    );
}


