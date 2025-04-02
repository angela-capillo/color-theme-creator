export default function ColorForm() {
  return (
    <form >
        <label htmlFor="role">Role</label>
        <input type="text" id="role" name="role" value="Primary Color" />
        <label htmlFor="hex">Hex</label>

        <label htmlFor="contrastText">Contrast text</label>

        <button type="submit">Add color</button>
    </form>
  );
}
