"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

import { Container } from "@/components/layout/Container";

const options = [
  {
    icon: Mail,
    title: "Email Us",
    value: "contact@atriawebsolutions.in",
    description: "We'll reply within 24 hours.",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "91 8766039459",
    description: "Monday – Saturday, 10:00 AM – 7:00 PM",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Vasai West, Maharashtra 401202",
    description:
      "Golden Park, 237-238, near Parvati Theatre, Navghar Manikpur, Dindayal Nagar.",
  },
];

export default function ContactOptions() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[var(--background)]

        py-24

        transition-colors
        duration-500
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-10

            h-[500px]
            w-[500px]

            -translate-x-1/2

            rounded-full

            bg-red-500/5
            dark:bg-red-600/8

            blur-[150px]
          "
        />
      </div>

      <Container className="relative z-10">
        {/* Section Intro */}

        <div className="mx-auto max-w-3xl text-center">
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

              text-red-600
              dark:text-red-400
            "
          >
            Get In Touch
          </span>

          <h2
            className="
              mt-7

              text-4xl
              font-bold
              tracking-tight

              text-[var(--foreground)]

              lg:text-5xl
            "
          >
            Let's Start a Conversation
          </h2>

          <p
            className="
              mx-auto
              mt-5

              max-w-2xl

              text-base
              leading-7

              text-[var(--muted)]

              sm:text-lg
              sm:leading-8
            "
          >
            Have a project in mind or simply want to learn more about what we
            do? Choose the easiest way to reach our team.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {options.map((option, index) => {
            const Icon = option.icon;
            const isEmail = option.title === "Email Us";
            const isPhone = option.title === "Call Us";

            const href = isEmail
              ? "https://mail.google.com/mail/?view=cm&fs=1&to=contact@atriawebsolutions.in&su=Project%20Inquiry%20-%20Atria%20Web%20Solutions"
              : isPhone
                ? "tel:91 8766039459"
                : undefined;

            return (
              <motion.div
                key={option.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
          group
          rounded-[28px]

          border
          border-[var(--border)]

          bg-[var(--card)]

          p-7
          sm:p-8

          shadow-[var(--shadow-sm)]

          transition-all
          duration-300

          hover:border-red-500/30
          hover:shadow-[0_20px_55px_rgba(239,68,68,.10)]
        "
              >
                {/* Icon */}

                <div
                  className="
            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-2xl

            border
            border-red-500/10

            bg-red-500/10

            transition-transform
            duration-300

            group-hover:scale-105
          "
                >
                  <Icon size={28} className="text-red-500" />
                </div>

                {/* Title */}

                <h3
                  className="
            mt-6

            text-2xl
            font-bold

            text-[var(--foreground)]

            transition-colors
            duration-300

            group-hover:text-red-500
          "
                >
                  {option.title}
                </h3>

                {/* Value */}

                {href ? (
                  <a
                    href={href}
                    target={isEmail ? "_blank" : undefined}
                    rel={isEmail ? "noopener noreferrer" : undefined}
                    className="
              mt-4
              block

              break-words

              text-lg
              font-medium

              text-[var(--foreground)]

              transition-colors
              duration-300

              hover:text-red-500
            "
                  >
                    {option.value}
                  </a>
                ) : (
                  <p
                    className="
              mt-4

              break-words

              text-lg
              font-medium

              text-[var(--foreground)]
            "
                  >
                    {option.value}
                  </p>
                )}

                {/* Description */}

                <p
                  className="
            mt-4

            leading-7

            text-[var(--muted)]
          "
                >
                  {option.description}
                </p>

                {/* Bottom Accent */}

                <div
                  className="
            mt-7

            h-px
            w-12

            bg-red-500/30

            transition-all
            duration-300

            group-hover:w-20
            group-hover:bg-red-500
          "
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
