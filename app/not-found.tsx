import FlareCursor from "@/components/flare-cursor/FlareCursor";
import Link from "next/link";


export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
        <FlareCursor />
      <h1 className="text-7xl font-bold text-accent">404</h1>

      <h2 className="mt-4 text-3xl text font-semibold">
        Lost in the code?
      </h2>

      <p className="mt-4 text-muted max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 border text border-accent px-6 py-3 hover:bg-accent hover:text-background transition"
      >
        Return Home
      </Link>
    </main>
  );
}