import type { Metadata } from "next";
import { CareerPositionPage } from "../_components/CareerPositionPage";
import { openPositions } from "@/components/sections/careers/careers-data";

export const metadata: Metadata = { title: "Backend Developer | Careers | Atria Web Solutions", description: "Join Atria Web Solutions as a Backend Developer building secure, scalable Laravel and MySQL systems." };
export default function BackendDeveloperPage() { return <CareerPositionPage job={openPositions[1]!} />; }
