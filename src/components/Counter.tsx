import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount((prevCount) => prevCount + 1);
    const decrease = () => setCount((prevCount) => prevCount - 1);

    return (
        <div>
            <h2>Value: {count}</h2>
            <button onClick={increase}>increment</button>
            <button onClick={decrease}>decrement</button>
        </div>
    );
};

export default Counter;