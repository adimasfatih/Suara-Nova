"use client";

import { useState } from "react";

interface CopyEmailButtonProps {
  email?: string;
  variant?: "hero" | "footer";
  className?: string;
}

export default function CopyEmailButton({
  email = "novaliacitra675@gmail.com",
  variant = "hero",
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (variant === "footer") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={`w-full sm:w-auto justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition flex items-center gap-2 cursor-pointer ${className}`}
        title="Klik untuk menyalin email"
      >
        <span>✉️ Email: {email}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-md font-medium transition-all ${
            copied
              ? "bg-emerald-500 text-white"
              : "bg-white/20 text-slate-200"
          }`}
        >
          {copied ? "Tersalin! ✓" : "Salin"}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`w-full sm:w-auto justify-center px-6 sm:px-7 py-3.5 border border-slate-300 hover:border-nova-teal hover:text-nova-teal font-medium rounded-xl transition flex items-center gap-2.5 bg-white cursor-pointer shadow-sm group ${className}`}
      title="Klik untuk menyalin alamat email"
    >
      <span>✉️</span>
      <span>{copied ? "Email Tersalin!" : "Kirim Email Kolaborasi"}</span>
      <span
        className={`text-xs px-2 py-0.5 rounded-full font-semibold transition-all ${
          copied
            ? "bg-emerald-100 text-emerald-700"
            : "bg-slate-100 text-slate-600 group-hover:bg-nova-teal/10 group-hover:text-nova-teal"
        }`}
      >
        {copied ? "✓ novaliacitra675@gmail.com" : "Salin"}
      </span>
    </button>
  );
}

