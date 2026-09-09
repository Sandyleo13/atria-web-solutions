import type { Metadata } from "next";
import { CareerPositionPage } from "../_components/CareerPositionPage";
import { openPositions } from "@/components/sections/careers/careers-data";

export const metadata: Metadata = { title: "Frontend Developer | Careers | Atria Web Solutions", description: "Join Atria Web Solutions as a Frontend Developer building responsive, high-performance React and Next.js applications." };
export default function FrontendDeveloperPage() { return <CareerPositionPage job={openPositions[0]!} />; }
