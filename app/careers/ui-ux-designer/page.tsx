import type { Metadata } from "next";
import { CareerPositionPage } from "../_components/CareerPositionPage";
import { openPositions } from "@/components/sections/careers/careers-data";

export const metadata: Metadata = { title: "UI / UX Designer Internship | Careers | Atria Web Solutions", description: "Apply for the UI / UX Designer internship at Atria Web Solutions and help create intuitive digital experiences." };
export default function UiUxDesignerPage() { return <CareerPositionPage job={openPositions[2]!} />; }
