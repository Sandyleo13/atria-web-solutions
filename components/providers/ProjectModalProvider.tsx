"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface ProjectModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ProjectModalContext =
  createContext<ProjectModalContextType | null>(null);

export function ProjectModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <ProjectModalContext.Provider
      value={{
        isOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModalContext() {
  const context = useContext(ProjectModalContext);

  if (!context) {
    throw new Error(
      "useProjectModalContext must be used inside ProjectModalProvider"
    );
  }

  return context;
}