import { useState } from "react"


export default function ColorInput({name, defaultValues}) {
    const [inputValue, setInputValue] = useState(defaultValues.hex);

    console.log(defaultValues.hex);

    // function handleInputValue() {
    //     setinputValue
    // }


    return (
        <>
        <input type="text" id={name} name={name} value={inputValue} >
        </input>
        <input type="color" value={inputValue} >
        </input>
        </>
    )
}