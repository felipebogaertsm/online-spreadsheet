"use client";

// Components:
import Grid from "./Grid";

// Contexts:
import { JSSProvider } from "@/contexts/JSSContext";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <JSSProvider>
        <Grid />
      </JSSProvider>
    </main>
  );
}
