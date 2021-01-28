import React from "react";
import ReactDOM from "react-dom";

/*function Welcome (props) {
  return <h1>Bonjour</h1>
}*/

const Timer = () => (
    <div className={"container"}>
        <div className={"time"}>
            <span className={"minute"}>{"00"}</span>
            <span>{":"}</span>
            <span className={"second"}>{"00"}</span>
        </div>
        <div className={"buttons"}>
            <button onClick={() => null} className={"start"}>
                {"Start"}
            </button>
            <button onClick={() => null} className={"reset"}>
                {"Reset"}
            </button>
        </div>
    </div>
);

ReactDOM.render(<Timer />, document.querySelector("#timer"));
