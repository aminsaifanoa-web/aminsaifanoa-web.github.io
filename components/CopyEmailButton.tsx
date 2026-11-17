"use client";

import { useEffect, useRef, useState } from "react";

/** Copy-email button with a 4-second confirmation, like a good terminal. */
export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 4000);
  };

  return (
    <button type="button" className="copy-email" onClick={copy}>
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
