import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => setCount((prevCount) => prevCount + 1);
    const decrease = () => setCount((prevCount) => prevCount - 1);

    return (
        <div>
            <h2>Value: {count}</h2>
            <button
                className={classes.btn}
                onClick={increase}
            >
                increment
            </button>
            <button
                className={classes.btn}
                onClick={decrease}
            >
                decrement
            </button>
        </div>
    );
};

export default Counter;