"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Send,
} from "lucide-react";

const services = [
  "Business Website",
  "E-Commerce",
  "Web Application",
  "UI / UX Design",
  "SEO & Marketing",
  "Other",
];

const budgets = [
  "Under ₹25,000",
  "₹25k – ₹50k",
  "₹50k – ₹1L",
  "₹1L – ₹3L",
  "₹3L+",
];

export default function ProjectInquiryForm() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!service) {
      setErrorMessage("Please select a service.");
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      setErrorMessage(
        "Please fill in your name, email and project details."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to send project request."
        );
      }

      // Success
      setSuccessMessage(
        "Your project request has been sent successfully. We'll get back to you shortly."
      );

      // Reset React state instead of using event.currentTarget.reset()
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        budget: "",
        message: "",
      });

      setService("");

      // Return to step 1
      setStep(1);
    } catch (error) {
      console.error("Project inquiry error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your project request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative p-8 sm:p-10 lg:p-14">

      {/* Header */}

      <div className="mb-10">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-red-500
          "
        >
          Start Your Project
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-bold
            text-gray-900
            sm:text-5xl
            dark:text-white
          "
        >
          Let's Build Something Amazing
        </h2>

        <p
          className="
            mt-5
            max-w-2xl
            leading-8
            text-gray-500
            dark:text-gray-400
          "
        >
          Tell us about your idea and we'll get back to you
          within one business day.
        </p>
      </div>

      {/* Success Message */}

      {successMessage && (
        <div
          className="
            mb-8
            rounded-2xl
            border
            border-green-500/20
            bg-green-500/10
            px-5
            py-4
            text-sm
            font-medium
            text-green-700
            dark:text-green-400
          "
        >
          {successMessage}
        </div>
      )}

      {/* Error Message */}

      {errorMessage && (
        <div
          className="
            mb-8
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/10
            px-5
            py-4
            text-sm
            font-medium
            text-red-600
            dark:text-red-400
          "
        >
          {errorMessage}
        </div>
      )}

      {/* Progress */}

      <div className="mb-10 flex gap-3">
        <div
          className={`h-2 flex-1 rounded-full ${
            step >= 1
              ? "bg-red-500"
              : "bg-gray-200 dark:bg-white/10"
          }`}
        />

        <div
          className={`h-2 flex-1 rounded-full ${
            step >= 2
              ? "bg-red-500"
              : "bg-gray-200 dark:bg-white/10"
          }`}
        />
      </div>

      {/* STEP 1 */}

      {step === 1 && (
        <>
          <h3
            className="
              text-2xl
              font-bold
              text-gray-900
              sm:text-3xl
              dark:text-white
            "
          >
            What are you looking to build?
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setService(item);
                  setErrorMessage("");
                  setSuccessMessage("");
                }}
                className={`
                  rounded-2xl
                  border
                  p-6
                  text-left
                  transition-all
                  duration-300

                  ${
                    service === item
                      ? "border-red-500 bg-red-500/10"
                      : "border-gray-200 bg-gray-50 hover:border-red-500/30 hover:bg-red-50"
                  }

                  dark:bg-[#121212]
                  dark:border-white/10
                  dark:hover:bg-red-500/5
                `}
              >
                <h4
                  className="
                    text-lg
                    font-semibold
                    text-gray-900
                    dark:text-white
                  "
                >
                  {item}
                </h4>
              </button>
            ))}
          </div>

          <button
            type="button"
            disabled={!service}
            onClick={() => {
              setErrorMessage("");
              setStep(2);
            }}
            className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-red-500
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:bg-red-600
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Continue

            <ArrowRight size={18} />
          </button>
        </>
      )}

      {/* STEP 2 */}

      {step === 2 && (
        <>
          <h3
            className="
              text-2xl
              font-bold
              text-gray-900
              sm:text-3xl
              dark:text-white
            "
          >
            Tell us about yourself
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            {/* Name + Email */}

            <div className="grid gap-6 md:grid-cols-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-5
                  py-4
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-red-500
                  focus:bg-white
                  dark:border-white/10
                  dark:bg-[#121212]
                  dark:text-white
                  dark:placeholder:text-gray-500
                  dark:focus:bg-[#121212]
                "
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                type="email"
                required
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-5
                  py-4
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-red-500
                  focus:bg-white
                  dark:border-white/10
                  dark:bg-[#121212]
                  dark:text-white
                  dark:placeholder:text-gray-500
                  dark:focus:bg-[#121212]
                "
              />
            </div>

            {/* Company + Phone */}

            <div className="grid gap-6 md:grid-cols-2">
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-5
                  py-4
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-red-500
                  focus:bg-white
                  dark:border-white/10
                  dark:bg-[#121212]
                  dark:text-white
                  dark:placeholder:text-gray-500
                  dark:focus:bg-[#121212]
                "
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                type="tel"
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  px-5
                  py-4
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-red-500
                  focus:bg-white
                  dark:border-white/10
                  dark:bg-[#121212]
                  dark:text-white
                  dark:placeholder:text-gray-500
                  dark:focus:bg-[#121212]
                "
              />
            </div>

            {/* Budget */}

            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                px-5
                py-4
                text-gray-900
                outline-none
                transition
                focus:border-red-500
                focus:bg-white
                dark:border-white/10
                dark:bg-[#121212]
                dark:text-white
                dark:focus:bg-[#121212]
              "
            >
              <option value="">Select Budget</option>

              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>

            {/* Project Description */}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell us about your project..."
              required
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                px-5
                py-4
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-red-500
                focus:bg-white
                dark:border-white/10
                dark:bg-[#121212]
                dark:text-white
                dark:placeholder:text-gray-500
                dark:focus:bg-[#121212]
              "
            />

            {/* Actions */}

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => {
                  setErrorMessage("");
                  setStep(1);
                }}
                disabled={isSubmitting}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-gray-200
                  bg-gray-50
                  px-7
                  py-4
                  text-gray-700
                  transition-all
                  hover:border-red-500/30
                  hover:bg-red-50
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                  dark:hover:bg-red-500/10
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <ArrowLeft size={18} />

                Back
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-red-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  hover:bg-red-600
                  hover:shadow-[0_0_30px_rgba(229,57,53,.25)]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Project Request"}

                <Send size={18} />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}