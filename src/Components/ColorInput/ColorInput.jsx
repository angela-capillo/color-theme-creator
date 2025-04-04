import { useState } from "react";
import "./ColorInput.css";
import { useEffect } from "react";


export default function ColorInput({name, onInput, value}) {

    return (
        <div className="color-input">
        <input type="text" id={name} name={name} value={value} onChange={onInput}>
        </input>
        <input type="color" value={value} onChange={onInput}>
        </input>
        </div>
    );
}