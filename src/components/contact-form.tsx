import React, { useState } from "react";
import Button from "./button.tsx";

interface ContactFormProps {
  apiKey?: string;
}

const ContactForm = ({ apiKey }: ContactFormProps) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.w3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Wystąpił błąd podczas wysyłania.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Błąd połączenia. Spróbuj ponownie lub zadzwoń.");
    }
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <form
        onSubmit={handleSubmit}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-[50px]"
      >
        <input type="hidden" name="access_key" value={apiKey} />
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        {/* 1. IMIĘ */}
        <label htmlFor="name" className="col-span-1">
          <input
            id="name"
            type="text"
            name="Imię"
            required
            className="border-b w-full border-black bg-transparent outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Imię"
          />
        </label>

        {/* 2. EMAIL */}
        <label htmlFor="email" className="col-span-1">
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border-b w-full border-black bg-transparent outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Email"
          />
        </label>

        {/* 3. TELEFON */}
        <label htmlFor="phone" className="col-span-1">
          <input
            id="phone"
            type="tel"
            name="telefon"
            required
            className="border-b w-full border-black bg-transparent outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Telefon"
          />
        </label>

        {/* 4. DATA */}
        <label htmlFor="date" className="col-span-1">
          <input
            id="date"
            type="text"
            name="data"
            placeholder="Orientacyjny termin (np. czerwiec 2027)"
            className="border-b w-full border-black bg-transparent outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
          />
        </label>

        {/* 5. WIADOMOŚĆ */}
        <textarea
          name="Wiadomość"
          required
          rows={6}
          className="col-span-1 md:col-span-2 border-b w-full border-black bg-transparent outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
          placeholder="Napisz, jaki termin i liczba gości Cię interesuje a my się odezwiemy..."
        ></textarea>

        {/* KOMUNIKATY STATUSU */}
        {status === "success" && (
          <div className="col-span-1 md:col-span-2 p-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-jost">
            Dziękujemy! Twoja wiadomość została wysłana. Skontaktujemy się najszybciej jak to możliwe.
          </div>
        )}

        {status === "error" && (
          <div className="col-span-1 md:col-span-2 p-4 rounded-xl bg-red-50 text-red-700 border border-red-200 font-jost">
            {errorMessage}
          </div>
        )}

        {/* PRZYCISK */}
        <div className="w-full flex justify-end col-span-1 md:col-span-2">
          <Button
            text={status === "loading" ? "Wysyłanie..." : "Wyślij"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;