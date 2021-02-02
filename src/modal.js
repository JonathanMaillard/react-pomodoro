import React from "react";
import ReactDOM from "react-dom";

const Modal = () => {
    function quit() {
        ReactDOM.render("", document.querySelector("#modal"));
    }

    function restart() {
        ReactDOM.render("", document.querySelector("#modal"));
        //Timer.setCounter(60);
        //Timer.setIsActive(true);
    }

    return (
        <div className={"main_modal"}>
            <div className={"inner_modal"}>
                <p>{"Time's Up ! BREAKTIME !"}</p>
                <div className={"modal_buttons"}>
                    <button onClick={restart} className={"restart"}>
                        {"RESTART"}
                    </button>
                    <button onClick={quit} className={"quit"}>
                        {"OK"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
