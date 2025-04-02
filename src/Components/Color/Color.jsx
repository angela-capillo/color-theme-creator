import "./Color.css";
import DeleteButtonGroup from "../DeleteButton/DeleteButton";

export default function Color({ color, onDelete }) {
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
    </div>
  );
}
