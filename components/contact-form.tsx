"use client";

import { useState } from "react";
import type { Language } from "@/lib/site-content";

type ContactFormProps = {
  language: Language;
  labels: {
    nameInput: string;
    emailInput: string;
    messageInput: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
};

type SubmitState = "idle" | "sending" | "success" | "error";

// Submits contact requests to the server-side email route and reports form status.
export function ContactForm({ language, labels }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("sending");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
          language,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || labels.error);
      }

      event.currentTarget.reset();
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(error instanceof Error ? error.message : labels.error);
    }
  }

  const isSending = submitState === "sending";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>{labels.nameInput}</span>
        <input type="text" name="name" required disabled={isSending} />
      </label>
      <label>
        <span>{labels.emailInput}</span>
        <input type="email" name="email" required disabled={isSending} />
      </label>
      <label>
        <span>{labels.messageInput}</span>
        <textarea name="message" rows={5} required disabled={isSending} />
      </label>
      <label className="contact-honeypot" aria-hidden="true">
        <span>Website</span>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          disabled={isSending}
        />
      </label>
      {submitState === "success" ? (
        <p className="contact-status success">{labels.success}</p>
      ) : null}
      {submitState === "error" ? (
        <p className="contact-status error">{errorMessage || labels.error}</p>
      ) : null}
      <button className="button" type="submit" disabled={isSending}>
        {isSending ? labels.sending : labels.submit}
      </button>
    </form>
  );
}
