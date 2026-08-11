import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import { openPositions } from "@/components/sections/careers/careers-data";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";

interface JobPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return openPositions.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;

  const job = openPositions.find(
    (position) => position.slug === slug
  );

  if (!job) {
    return {
      title: "Job Not Found | Atria Web Solutions",
    };
  }

  return {
    title: `${job.title} | Careers | Atria Web Solutions`,
    description: job.description,
  };
}

export default async function JobPage({
  params,
}: JobPageProps) {
  const { slug } = await params;

  const job = openPositions.find(
    (position) => position.slug === slug
  );

  if (!job) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-[var(--background)]">

        {/* Hero */}

        <section className="relative overflow-hidden py-24">

          <div className="pointer-events-none absolute inset-0">
            <div
              className="
                absolute
                left-1/2
                top-0
                h-[500px]
                w-[700px]
                -translate-x-1/2
                rounded-full
                bg-red-500/10
                blur-[180px]
              "
            />
          </div>

          <Container className="relative z-10">

            <Link
              href="/careers"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-[var(--muted)]
                transition-colors
                hover:text-red-500
              "
            >
              <ArrowLeft size={17} />
              Back to Careers
            </Link>

            <div className="mt-12 max-w-4xl">

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
                  tracking-[0.25em]
                  text-red-600
                  dark:text-red-400
                "
              >
                {job.type}
              </span>

              <h1
                className="
                  mt-6
                  text-5xl
                  font-bold
                  tracking-tight
                  text-[var(--foreground)]
                  sm:text-6xl
                "
              >
                {job.title}
              </h1>

              <p
                className="
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-8
                  text-[var(--muted)]
                "
              >
                {job.description}
              </p>

              {/* Job Info */}

              <div className="mt-10 flex flex-wrap gap-4">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-3
                    text-sm
                    text-[var(--muted)]
                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <Briefcase
                    size={17}
                    className="text-red-500"
                  />
                  {job.type}
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-3
                    text-sm
                    text-[var(--muted)]
                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <MapPin
                    size={17}
                    className="text-red-500"
                  />
                  {job.location}
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-3
                    text-sm
                    text-[var(--muted)]
                    dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <Clock3
                    size={17}
                    className="text-red-500"
                  />
                  {job.experience}
                </div>

              </div>

            </div>
          </Container>
        </section>

        {/* Job Details */}

        <section className="pb-28">

          <Container>

            <div className="grid gap-12 lg:grid-cols-[1fr_350px]">

              {/* Main Content */}

              <div className="space-y-14">

                {/* Responsibilities */}

                <div>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      text-[var(--foreground)]
                    "
                  >
                    What You&apos;ll Do
                  </h2>

                  <ul className="mt-7 space-y-4">

                    {job.responsibilities.map(
                      (item) => (
                        <li
                          key={item}
                          className="
                            flex
                            gap-3
                            leading-7
                            text-[var(--muted)]
                          "
                        >
                          <CheckCircle2
                            size={20}
                            className="
                              mt-1
                              shrink-0
                              text-red-500
                            "
                          />

                          {item}
                        </li>
                      )
                    )}

                  </ul>

                </div>

                {/* Requirements */}

                <div>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      text-[var(--foreground)]
                    "
                  >
                    Requirements
                  </h2>

                  <ul className="mt-7 space-y-4">

                    {job.requirements.map(
                      (item) => (
                        <li
                          key={item}
                          className="
                            flex
                            gap-3
                            leading-7
                            text-[var(--muted)]
                          "
                        >
                          <CheckCircle2
                            size={20}
                            className="
                              mt-1
                              shrink-0
                              text-red-500
                            "
                          />

                          {item}
                        </li>
                      )
                    )}

                  </ul>

                </div>

                {/* Skills */}

                <div>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      text-[var(--foreground)]
                    "
                  >
                    Skills
                  </h2>

                  <div className="mt-7 flex flex-wrap gap-3">

                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-gray-200
                          bg-white
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-[var(--foreground)]
                          dark:border-white/10
                          dark:bg-white/[0.03]
                        "
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

              {/* Apply Card */}

              <aside>

                <div
                  className="
                    sticky
                    top-28
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-7
                    shadow-[0_18px_45px_rgba(17,24,39,.06)]
                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:shadow-none
                  "
                >

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-[var(--foreground)]
                    "
                  >
                    Interested in this role?
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                      text-[var(--muted)]
                    "
                  >
                    Apply now and take the next step
                    in your career with Atria Web
                    Solutions.
                  </p>

                  <Link
                    href={`mailto:careers@atriawebsolutions.com?subject=Application for ${job.title}`}
                    className="
                      mt-7
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-red-600
                      px-6
                      py-4
                      font-semibold
                      text-white
                      transition-all
                      hover:-translate-y-1
                      hover:bg-red-700
                      hover:shadow-[0_15px_35px_rgba(239,68,68,.25)]
                    "
                  >
                    Apply Now
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </aside>

            </div>

          </Container>

        </section>

      </main>

      <Footer />
    </>
  );
}