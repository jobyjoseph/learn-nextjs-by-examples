import Link from "next/link";

export function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="px-4 py-6 flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-bold">Learn</span>{" "}
          <img src="/next.svg" alt="Logo" className="h-4 w-auto" />
          <span className="text-lg font-bold">by</span>{" "}
          <span className="text-lg font-bold">examples</span>{" "}
        </Link>
      </div>
    </header>
  );
}
