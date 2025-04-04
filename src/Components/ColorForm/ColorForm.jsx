import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { useState, useEffect } from "react";

export default function ColorForm({ onAddColor, mode, color, onEditColor }) {
  const defaultValues = {
    role: "Some color",
    hex: "#123456",
    contrastText: "#ffffff",
  };

  // these are values for the input add form

  const [hexValue, setHexValue] = useState(defaultValues.hex);
  const [contrastTextValue, setContrastTextValue] = useState(defaultValues.contrastText);

  // here we use useEffect to change the value of hex when we are in edit mode

  useEffect(() => {
    if (mode === "edit") {
      setHexValue(color.hex);
      setContrastTextValue(color.contrastText);
    } else {
      setHexValue(defaultValues.hex);
      setContrastTextValue(defaultValues.contrastText);
    }

  }, [mode, color])


  function handleHexValue(event) {
    setHexValue(event.target.value);
  }

  function handleContrastTextValue(event) {
    setContrastTextValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    console.log(event.target);

    if (mode === "edit") {
      onEditColor({
        id: color.id,
        role: data.role,
        hex: data.hex,
        contrastText: data.contrastText,
      });
    } else {
      onAddColor({
        role: data.role,
        hex: data.hex,
        contrastText: data.contrastText,
      });
    }

    // all the resets here
    
    event.target.reset();
    setHexValue(defaultValues.hex);
    setContrastTextValue(defaultValues.contrastText);


    event.target.elements.role.focus();
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        name="role"
        defaultValue={mode === "edit" ? color.role : defaultValues.role}
      />
      <label htmlFor="hex">Hex</label>
      <ColorInput
        name="hex"
        value={hexValue}
        
        onInput={handleHexValue}
      ></ColorInput>
      <label htmlFor="contrastText">Contrast text</label>
      <ColorInput
        name="contrastText"
        value={contrastTextValue}
        onInput={handleContrastTextValue}
      ></ColorInput>
      <button type="submit">
        {mode === "edit" ? "Update color" : "Add color"}
      </button>
    </form>
  );
}
