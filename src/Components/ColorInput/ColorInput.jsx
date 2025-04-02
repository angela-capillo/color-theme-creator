import { useState } from "react"


export default function ColorInput({name, defaultValue}) {
    const [inputValue, setInputValue] = useState(defaultValue);

    //console.log(defaultValues.hex);

    function handleInputValue(event) {
        setInputValue(event.target.value);
    }

    return (
        <>
        <input type="text" id={name} name={name} value={inputValue} onChange={handleInputValue}>
        </input>
        <input type="color" value={inputValue} onChange={handleInputValue}>
        </input>
        </>
    );
}