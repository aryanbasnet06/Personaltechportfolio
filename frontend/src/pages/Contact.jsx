import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, ArrowUpRight, Loader2 } from "lucide-react";
import { PageIntro } from "../components/Blocks";
import { Reveal } from "../components/Motion";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const EMPTY = { first_name: "", last_name: "", email: "", phone: "", message: "" };

const Field = ({ id, label, ...props }) => (
  <label htmlFor={id} className="field">
    <span className="field-label">{label}</span>
    <input id={id} name={id} className="field-input focus-ring" data-testid={`contact-${id.replace("_", "-")}-input`} {...props} />
  </label>
);

const RequestCall = () => {
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Thank you! Your message has been sent.");
      setForm(EMPTY);
    } catch (err) {
      toast.error(err?.response?.status === 422 ? "Please check your details and try again." : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form onSubmit={submit} className="contact-card" data-testid="contact-form">
      <h2 className="font-serif text-3xl md:text-4xl text-ink">Request a Call</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="first_name" label="First Name" required maxLength={80} value={form.first_name} onChange={set("first_name")} autoComplete="given-name" />
        <Field id="last_name" label="Last Name" maxLength={80} value={form.last_name} onChange={set("last_name")} autoComplete="family-name" />
        <Field id="email" label="Email Address" type="email" required value={form.email} onChange={set("email")} autoComplete="email" />
        <Field id="phone" label="Contact Number" type="tel" maxLength={40} value={form.phone} onChange={set("phone")} autoComplete="tel" />
      </div>
      <label htmlFor="message" className="field mt-5">
        <span className="text-[15px] leading-relaxed text-soft">I'm looking forward to connect with you! Is there anything specific you want to discuss with me?</span>
        <textarea id="message" rows={5} maxLength={4000} value={form.message} onChange={set("message")} className="field-input focus-ring resize-y min-h-[140px]" data-testid="contact-message-input" />
      </label>
      <button type="submit" disabled={busy} className="btn-primary focus-ring mt-8 disabled:opacity-70" data-testid="contact-submit-button">
        {busy ? <Loader2 size={16} className="animate-spin" /> : null} Submit
      </button>
    </form>
  );
};

export default function Contact() {
  return (
    <main data-testid="page-contact">
      <PageIntro eyebrow="Contact" lines={["Contact Me"]} testid="contact-intro" />
      <section className="bg-paper py-20 md:py-28">
        <div className="container-x grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7"><RequestCall /></Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <a href="mailto:basnetaryan05@gmail.com" className="mail-card group focus-ring" data-testid="contact-mail-link">
              <h2 className="font-serif text-3xl md:text-4xl">Give me Mail.</h2>
              <div>
                <Mail size={28} strokeWidth={1.5} />
                <span className="mt-5 flex items-center gap-2 break-all text-lg md:text-xl">basnetaryan05@gmail.com <ArrowUpRight size={18} className="shrink-0 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
              </div>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
