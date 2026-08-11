"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { useProjectModal } from "@/hooks/useProjectModal";
import ProjectInquiryForm from "@/components/forms/ProjectInquiryForm";

export default function ProjectModal() {
  const { isOpen, closeModal } = useProjectModal();

  // Lock page scroll
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal}
            className="
              fixed
              inset-0
              z-[9998]
              bg-black/40
              backdrop-blur-md

              dark:bg-black/75
            "
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 30,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              left-1/2
              top-1/2
              z-[9999]

              w-[95%]
              max-w-5xl

              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                overflow-hidden

                rounded-[36px]

                border
                border-gray-200

                bg-white

                shadow-[0_30px_120px_rgba(0,0,0,.20)]

                dark:border-white/10
                dark:bg-[#090909]
                dark:shadow-[0_30px_120px_rgba(0,0,0,.55)]
              "
            >
              {/* Ambient Glow */}

              <div className="absolute inset-0 overflow-hidden">
                <div
                  className="
                    absolute
                    -right-32
                    -top-32
                    h-72
                    w-72
                    rounded-full
                    bg-red-500/10
                    blur-[120px]
                  "
                />

                <div
                  className="
                    absolute
                    -left-24
                    bottom-0
                    h-60
                    w-60
                    rounded-full
                    bg-red-500/10
                    blur-[120px]
                  "
                />
              </div>

              {/* Close */}

              <button
                onClick={closeModal}
                aria-label="Close project modal"
                className="
                  absolute
                  right-6
                  top-6
                  z-20

                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-gray-200

                  bg-gray-100

                  text-gray-700

                  transition-all
                  duration-300

                  hover:border-red-500/30
                  hover:bg-red-500
                  hover:text-white

                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-white
                "
              >
                <X size={20} />
              </button>

              {/* Form */}

              <div className="relative z-10 max-h-[85vh] overflow-y-auto">
                <ProjectInquiryForm />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}