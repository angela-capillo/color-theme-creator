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

  // Use useEffect to call fetchContrast when colors change
  useEffect(() => {
    fetchContrast();
  }, [textColor, bgColor]);

  let message = ""; 

  if (contrastResult) {
    const overallScore = contrastResult.overall;

    if (overallScore === "Yup") {
      message = "Yup";
    } else if (overallScore === "Kinda") {
      message = "Kinda";
    } else if (overallScore === "Nope") {
      message = "Nope";
    }
  }

  return <p>Overall Contrast Score: {message}</p>;
}
