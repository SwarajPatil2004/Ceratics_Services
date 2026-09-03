import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-center text-foreground">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-muted-foreground">
          The requested page could not be found.
        </p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </main>
  );
}
