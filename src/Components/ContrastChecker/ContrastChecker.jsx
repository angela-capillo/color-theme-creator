import { useState, useEffect } from "react";
import "./ContrastChecker.css";

export default function ContrastChecker({ textColor, bgColor }) {
  const [contrastResult, setContrastResult] = useState(null);

  async function fetchContrast() {
    const response = await fetch(
      `https://www.aremycolorsaccessible.com/api/are-they`, {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify({ colors: [textColor, bgColor] }),
      });
    const data = await response.json();
    console.log(data);
    setContrastResult(data);
  }
  useEffect(() => {
    fetchContrast();
  }, [textColor, bgColor]);

  let message = "";
  let messageTextColor = "";
  let messageBgColor = "";

  if (contrastResult) {
    const overallScore = contrastResult.overall;

    if (overallScore === "Yup") {
      message = "Yup";
      messageTextColor = "#000000";
      messageBgColor = "#00d15b";
    } else if (overallScore === "Kinda") {
      message = "Kinda";
      messageTextColor = "#000000";
      messageBgColor = "#ffae00";
    } else if (overallScore === "Nope") {
      message = "Nope";
      messageTextColor = "#ffffff";
      messageBgColor = "#bb1111";
    }
  }

  return <p className="contrast-checker" style={{color: messageTextColor, backgroundColor: messageBgColor}}>Overall Contrast Score: {message}</p>;
}
