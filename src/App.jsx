import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  //const [colors, setColors] = useState(initialColors); -> this needs to be a use local storage
  const [colors, setColors] = useLocalStorageState("colors", {defaultValue: initialColors});


  function handleAddColor(newColor) {
    newColor.id = uid();
    setColors([newColor, ...colors]);
  }

  function handleDeleteColor(colorId) {
    setColors(colors.filter((color) => color.id !== colorId));
  }

  function handleEditColor(editedColor) {
    // console.log(colors);
    // console.log(editedColor.id)
    // here I need to loop through the colors array and find the one that matches the id of edited color to overwrite it
    colors.forEach((color) => {
      if (color.id === editedColor.id) {
        color.role = editedColor.role;
        color.hex = editedColor.hex;
        color.contrastText = editedColor.contrastText;
      }
    });
    setColors([...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} mode="add" />
      {colors.length === 0 ? (<p>No colors here! Start with adding one!</p>) :
      (colors.map((color) => {
        return (
          <Color
            key={color.id}
            color={color}
            onDelete={handleDeleteColor}
            onEditColor={handleEditColor}
          />
        );
      }))
    }
    </>
  );
}

export default App;