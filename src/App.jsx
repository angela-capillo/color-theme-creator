import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";


function App() {

  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    newColor.id = uid();
    setColors([newColor, ...colors]);
  }

  function handleDeleteColor(colorId) {
    setColors(colors.filter((color) => color.id !== colorId));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} onDelete={handleDeleteColor}/>;
      })}
    </>
  );
}

export default App;
