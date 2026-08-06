"use client";

import { useProjectModalContext } from "@/components/providers/ProjectModalProvider";

export function useProjectModal() {
  return useProjectModalContext();
}