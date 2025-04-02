import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onAddEntry }) {
    
    const defaultValues = {role: "Primary color", hex: "#663399", contrastText: "#F0E8F7"};

    function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = Object.fromEntries(form);

        console.log(data)
    
        onAddEntry({role: data.role, hex: data.hex, contrastText:data.contrastText})
    
        event.target.reset();
        event.target.elements.role.focus();
      }


  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role" defaultValue={defaultValues.role} />
        <label htmlFor="hex">Hex</label>
        <ColorInput name="hex" defaultValue={defaultValues.hex}></ColorInput>
        <label htmlFor="contrastText">Contrast text</label>
        <ColorInput name="contrastText" defaultValue={defaultValues.contrastText}></ColorInput>
        <button type="submit">Add color</button>
    </form>
  );
}
