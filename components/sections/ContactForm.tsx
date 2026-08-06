"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({ name: z.string().min(2, "Please enter your name."), email: z.string().email("Please enter a valid email."), company: z.string().optional(), message: z.string().min(10, "Please tell us a little more about your project.") });
type ContactValues = z.infer<typeof contactSchema>;
const fieldClass = "mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/15";

export function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });
  const onSubmit = async () => { setIsSent(true); reset(); };
  return <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-semibold">Your name<input className={fieldClass} placeholder="Jane Smith" {...register("name")} />{errors.name && <span className="mt-1 block text-xs text-brand">{errors.name.message}</span>}</label><label className="text-sm font-semibold">Work email<input className={fieldClass} placeholder="jane@company.com" {...register("email")} />{errors.email && <span className="mt-1 block text-xs text-brand">{errors.email.message}</span>}</label></div><label className="mt-5 block text-sm font-semibold">Company <span className="font-normal text-muted">(optional)</span><input className={fieldClass} placeholder="Company name" {...register("company")} /></label><label className="mt-5 block text-sm font-semibold">Tell us about your project<textarea rows={5} className={fieldClass} placeholder="A few details about what you are planning..." {...register("message")} />{errors.message && <span className="mt-1 block text-xs text-brand">{errors.message.message}</span>}</label><button disabled={isSubmitting} className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-lg bg-brand px-5 text-sm font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60">{isSent ? "Message Sent" : "Send Message"}<Send size={16} /></button>{isSent && <p className="mt-3 text-sm text-emerald-700">Thanks—we&apos;ll be in touch shortly.</p>}</form>;
}
