import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm() {
    
    const defaultValues = {role: "Primary color", hex: "#663399", contrastText: "#F0E8F7"};


  return (
    <form >
        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role" value="Primary Color" />
        <label htmlFor="hex">Hex</label>
        <ColorInput name="hex" defaultValues={defaultValues}></ColorInput>
        <label htmlFor="contrastText">Contrast text</label>

        <button type="submit">Add color</button>
    </form>
  );
}
