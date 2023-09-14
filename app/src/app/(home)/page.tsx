import { JSSProvider } from "@/contexts/JSSContext";
import Grid from "./Grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <JSSProvider>
        <Grid />
      </JSSProvider>
    </main>
  );
}
