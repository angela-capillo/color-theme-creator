import "./Color.css";
import DeleteButtonGroup from "../DeleteButton/DeleteButton";
import { useState } from "react";

export default function Color({ color, onDelete }) {

  const [isEditMode, setIsEditMode] = useState(false);

  function toggleEditMode() {
    setIsEditMode(!isEditMode); // this because when using it as a ternary operator, in both cases we set it to false
  }

  //console.log(isEditMode)
  //console.log("Find Issue 1");
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <DeleteButtonGroup colorId={color.id} onDelete={onDelete} />
      <button onClick={toggleEditMode}>Edit</button>
    </div>
  );
}
