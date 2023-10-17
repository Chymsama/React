import React,{useState} from "react";

const Button  = () =>{
    const [message, setMessage] =useState=('');

    const handleClick = () =>{
        setMessage('Hello Quang ne`');
    };

    return(
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p>{message}</p>
        </div>
    );
 
};

export default Button;