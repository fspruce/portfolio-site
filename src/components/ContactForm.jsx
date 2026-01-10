import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
          console.error(error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <div className="grow flex items-center justify-center p-6 lg:p-12 bg-base-100">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-8 w-full max-w-4xl p-10 lg:p-16 bg-base-200 border border-base-300 rounded-4xl shadow-2xl"
        >
          <legend className="text-4xl font-black mb-2 text-center tracking-tight">
            Send Me A Message!
          </legend>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered input-lg w-full validator"
                name="user_name"
                required
              />
              <p className="validator-hint hidden">Required</p>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered input-lg w-full validator"
                name="user_email"
                required
              />
              <p className="validator-hint hidden">Required</p>
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-lg font-bold">Subject</span>
            </label>
            <input
              type="text"
              placeholder="What is this regarding?"
              className="input input-bordered input-lg w-full validator"
              name="subject"
              required
            />
            <p className="validator-hint hidden">Required</p>
          </div>

          <div className="form-control w-full grow">
            <label className="label">
              <span className="label-text text-lg font-bold">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered textarea-lg w-full h-48 lg:h-64 resize-none text-lg validator"
              placeholder="Tell us everything..."
              name="message"
              required
            ></textarea>
            <p className="validator-hint hidden">Required</p>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-full text-xl h-20 rounded-2xl shadow-lg hover:scale-[1.01] transition-transform"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </>
  );
}
