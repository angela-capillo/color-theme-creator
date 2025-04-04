import { useState } from "react";
import "./DeleteButton.css";

export default function DeleteButtonGroup({ colorId, onDelete, onEditMode, onTogglingEditMode }) { 
    const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

    //console.log(onEditMode)

    function handleDelete() {
        //setColors(colors.filter((color) => color.id !== colorId)); move up at app level
        onDelete(colorId); // id here
        setShowConfirmationMessage(false);
    }

    function handleCancel() {
        setShowConfirmationMessage(false);
    }

    function handleQuitEditMode(){
      onTogglingEditMode();
    }

    // this return now needs to have another condition for edit mode

    if (onEditMode) {
      return (
        <div className="delete-button-group">
          <button onClick={handleQuitEditMode}>Cancel</button>
        </div>
      )
    } else {
    
    return (
        <div className="delete-button-group"> 
      {!showConfirmationMessage ? (
        // here the default button
        <>
        <button onClick={() => setShowConfirmationMessage(true)}>Delete</button>
        <button onClick={onTogglingEditMode}>Edit</button> 
        </>
      ) : (
        // here the confirmation version
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      )}
    </div>
    );}
}