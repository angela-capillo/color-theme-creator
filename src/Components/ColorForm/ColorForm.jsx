import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({ onAddColor, mode, color, onEditColor }) {
  const defaultValues = {
    role: "Primary color",
    hex: "#663399",
    contrastText: "#F0E8F7",
  };

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = Object.fromEntries(form);

    //console.log(data)
    if (mode === "edit") {
      onEditColor({
        id: color.id,
        role: data.role,
        hex: data.hex,
        contrastText: data.contrastText,
      })
    } else {
      onAddColor({
        role: data.role,
        hex: data.hex,
        contrastText: data.contrastText,
      });
    }
    event.target.reset();
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
        defaultValue={mode === "edit" ? color.hex : defaultValues.hex}
      ></ColorInput>
      <label htmlFor="contrastText">Contrast text</label>
      <ColorInput
        name="contrastText"
        defaultValue={
          mode === "edit" ? color.contrastText : defaultValues.contrastText
        }
      ></ColorInput>
      <button type="submit">
        {mode === "edit" ? "Edit color" : "Add color"}
      </button>
    </form>
  );
}
