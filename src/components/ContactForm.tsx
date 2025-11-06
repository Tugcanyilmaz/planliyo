"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-4">
      <input type="text" name="name" placeholder="Adınız" required className="w-full p-3 border rounded-lg" />
      <input type="email" name="email" placeholder="E-posta adresiniz" required className="w-full p-3 border rounded-lg" />
      <textarea name="message" placeholder="Mesajınız" required rows={4} className="w-full p-3 border rounded-lg"></textarea>
      <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
        Gönder
      </button>

      {status === "success" && <p className="text-green-600 text-center font-medium mt-2">✅ Mesajınız gönderildi!</p>}
      {status === "error" && <p className="text-red-600 text-center font-medium mt-2">❌ Mesaj gönderilemedi. Tekrar deneyin.</p>}
    </form>
  );
}
