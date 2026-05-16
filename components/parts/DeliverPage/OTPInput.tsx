"use client";

import { useRef } from "react";

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error: boolean;
}

export function OTPInput({ length = 6, value, onChange, error }: OTPInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const chars = value.split("").concat(Array(length).fill("")).slice(0, length);

  const handleKey = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const next = chars.map((c, idx) => idx === i ? "" : c).join("").trimEnd();
      onChange(next);
      if (i > 0) refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowLeft" && i > 0) {
      refs.current[i - 1]?.focus();
    } else if (e.key === "ArrowRight" && i < length - 1) {
      refs.current[i + 1]?.focus();
    }
  };

  const handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!raw) return;
    const char = raw[raw.length - 1];
    const next = chars.map((c, idx) => idx === i ? char : c).join("").slice(0, length);
    onChange(next);
    if (i < length - 1) refs.current[i + 1]?.focus();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, length);
    onChange(pasted);
    refs.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={el => { refs.current[i] = el; }}
          className={`otp-input ${chars[i] ? "filled" : ""} ${error ? "error" : ""}`}
          type="text"
          inputMode="text"
          maxLength={1}
          value={chars[i] || ""}
          onChange={e => handleChange(i, e)}
          onKeyDown={e => handleKey(i, e)}
          onPaste={handlePaste}
          autoFocus={i === 0}
        />
      ))}
    </div>
  );
}