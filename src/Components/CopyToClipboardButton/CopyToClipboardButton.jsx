import { useState, useEffect } from "react";
import "./CopyToClipboardButton.css";

export default function CopyToClipboardButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyToClipboard() {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
      console.log(isCopied);
    }, 3000);
    return () => {
      // we clear timeout before running the new effect
      clearTimeout(timeout);
    };
  }, [isCopied]);

  return (
    <button type="button" onClick={handleCopyToClipboard}>
      {isCopied ? "Successfully copied!" : "Copy"}
    </button>
  );
}
