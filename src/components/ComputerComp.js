import React from "react";

const ComputerComp = (props) => {
    const [number, setNumber] = React.useState(1);
    return (
        <div className="container">
            <h2>Computers [Pure Redux with Payload]</h2>
            <h3>
                Number of Computers :
                <span className="number">{}</span>
            </h3>
            <input
                type="number"
                value={number}
                onChange={}
            />
            <br />
            <button onClick={}>
                Sell {number} Computer
            </button>
        </div>
    );
};


export default ComputerComp;
