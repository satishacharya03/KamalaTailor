import Link from "next/link";

export default function NotFound() {
    return (
      <div className="container mx-auto flex min-h-[600px] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-2 text-lg text-muted-foreground">Page not found</p>
          <Link href="/">Go back to the home page</Link>
        </div>
      </div>
    );
  }