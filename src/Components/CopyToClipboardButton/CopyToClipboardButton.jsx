import { useState } from "react";
import "./CopyToClipboardButton.css";

export default function CopyToClipboardButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyToClipboard() {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
  }

  return (
    <button type="button" onClick={handleCopyToClipboard}>{isCopied ? "Successfully copied!" : "Copy"}</button>
  );
}
