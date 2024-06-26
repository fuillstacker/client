import React from "react";
import './input.css'

const Input = (props) => {
    return (
        <input type={props.type} 
        placeholder={props.placeholder} 
        value={props.value} 
        onChange={(e) => props.setValue(e.target.value)}
        />
    )
}

export default Input