import { useState } from "react";
import "./ColorInput.css";
import { useEffect } from "react";


export default function ColorInput({name, defaultValue, onInput, value}) {
    // const [inputValue, setInputValue] = useState(defaultValue); move upstream

    // function handleInputValue(event) {
    //     setInputValue(event.target.value);
    // }

    //console.log("defaultValue:", defaultValue);
    return (
        <div className="color-input">
        <input type="text" id={name} name={name} value={value} onChange={onInput}>
        </input>
        <input type="color" value={value} onChange={onInput}>
        </input>
        </div>
    );
}