import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";
import { useState } from "react";

export default function ColorForm({ onAddColor, mode, color, onEditColor }) {
  const defaultValues = {
    role: "Primary color",
    hex: "#663399",
    contrastText: "#F0E8F7",
  };

  // these are values for the input add form

  const [hexValue, setHexValue] = useState(defaultValues.hex);
  const [contrastTextValue, setContrastTextValue] = useState(defaultValues.contrastText);

  // console.log(color);
  // const [hexValueEdit, setHexValueEdit] = useState(color.hex);
  // const [contrastTextValueEdit, setContrastTextValueEdit] = useState(color.contrastText);
  // defaultvalue={mode === "edit" ? hexValueEdit : hexValue}
  // defaultValue={mode === "edit" ? contrastTextValueEdit : contrastTextValue}


  function handleHexValue(event) {
    //console.log("bla")
    setHexValue(event.target.value);
  }

  function handleContrastTextValue(event) {
    setContrastTextValue(event.target.value);
  }

  // function handleHexValueEdit(event) {
  //   //console.log("bla")
  //   setHexValueEdit(event.target.value);
  // }

  // function handleContrastTextValueEdit(event) {
  //   setContrastTextValueEdit(event.target.value);
  // }



  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    console.log(event.target);

    //console.log(data)
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
    event.target.reset(); // <- this is resetting only the role input :/
    // setHexValue("#666666");
    // setContrastTextValue("#000000");
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
