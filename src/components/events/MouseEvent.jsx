import React, { useState } from 'react';

const MouseEvent = () => {
    const [bg, setBg] = useState("purple");

    const changeColor = () => {
        document.body.style.backgroundColor = "indigo";
        setBg("black");
    };

    const colorHandler = () => {
        document.body.style.backgroundColor = "white";
        setBg("white");
    };

    return (
        <div className="w-400 h-400 bg-purple text-black text-center">
            <button onClick={changeColor} onDoubleClick={colorHandler}>Click</button>
        </div>
    );
};

export default MouseEvent;
