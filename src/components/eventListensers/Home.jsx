import React, { useState, useEffect } from 'react';

const Home = () => {
    const [size, setSize] = useState({
        width: "200px",
        height: "200px",
    });

    useEffect(() => {
        const updateSize = () => {
            setSize({
                width: "600px",
                height: "500px",
            });
        };

        
        const button = document.getElementById("changeButton");
        button.addEventListener("click", updateSize);

        
        return () => {
            button.removeEventListener("click", updateSize);
        };
    }, []); 
    return (
        <div>
            <center>
                <div className="flex items-center justify-center h-screen">
                    <img src="https://4kwallpapers.com/images/walls/thumbs/13748.jpg" style={{ width: size.width, height: size.height }} alt="" />
                    <button id="changeButton">Change</button>
                </div>
            </center>
        </div>
    );
};

export default Home;
