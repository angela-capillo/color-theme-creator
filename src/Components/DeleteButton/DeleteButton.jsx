import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButtonGroup({ colorId, onDelete }) { 
    const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

    function handleDelete() {
        //setColors(colors.filter((color) => color.id !== colorId)); move up at app level
        onDelete(colorId); // id here
        setShowConfirmationMessage(false);
    }

    function handleCancel() {
        setShowConfirmationMessage(false);
    }
    
    return (
        <div className="delete-button-group">
      {!showConfirmationMessage ? (
        // here the default button
        <button onClick={() => setShowConfirmationMessage(true)}>Delete</button>
      ) : (
        // here the confirmation version
        <div>
          <p className="color-card-highlight">Really delete?</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
    );
}
