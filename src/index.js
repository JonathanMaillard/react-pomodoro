import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const Timer = () => {
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                const computedSecond =
                    String(secondCounter).length === 1
                        ? `0${secondCounter}`
                        : secondCounter;
                const computedMinute =
                    String(minuteCounter).length === 1
                        ? `0${minuteCounter}`
                        : minuteCounter;

                const newCount = counter - 1;

                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter(newCount);
            }, 1000);
        }

        if (isActive && counter < 0) {
            setIsActive(!isActive);
            setCounter(0);
        }

        return () => clearInterval(intervalId);
    }, [isActive, counter]);

    function reset() {
        setIsActive(false);
        setCounter(0);
        setSecond("00");
        setMinute("00");
    }

    return (
        <div className={"container"}>
            <div className={"time"}>
                <span className={"minute"}>{minute}</span>
                <span>{":"}</span>
                <span className={"second"}>{second}</span>
            </div>
            <div className={"buttons"}>
                <button
                    onClick={() => {
                        if (!isActive) {
                            const counterPlus = counter + 60;
                            setCounter(counterPlus);

                            if (Number(minute) + 1 < 10) {
                                const minutePlus = String(
                                    `0${Number(minute) + 1}`,
                                );
                                setMinute(minutePlus);
                            } else {
                                const minutePlus = String(Number(minute) + 1);
                                setMinute(minutePlus);
                            }
                        }
                    }}
                    className={"plus"}>
                    {"+"}
                </button>
                <button
                    onClick={() => setIsActive(!isActive)}
                    className={"start"}>
                    {isActive ? "STOP" : "START"}
                </button>
                <button onClick={reset} className={"reset"}>
                    {"RESET"}
                </button>
                <button
                    onClick={() => {
                        if (!isActive && counter >= 60) {
                            const counterMinus = counter - 60;
                            setCounter(counterMinus);

                            if (Number(minute) - 1 < 10) {
                                const minuteMinus = String(
                                    `0${Number(minute) - 1}`,
                                );
                                setMinute(minuteMinus);
                            } else {
                                const minuteMinus = String(Number(minute) - 1);
                                setMinute(minuteMinus);
                            }
                        }
                    }}
                    className={"minus"}>
                    {"-"}
                </button>
            </div>
        </div>
    );
};

ReactDOM.render(<Timer />, document.querySelector("#timer"));
