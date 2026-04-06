import Link from "next/link";

export function Sidebar() {
  return (
    <div className="w-96 border-r border-gray-200 bg-white p-4 h-screen">
      <h4 className="font-bold text-gray-900">Caching</h4>
      <ul className="mt-2 space-y-2">
        <li>
          <Link
            href="/data-level-caching"
            className="text-gray-700 hover:text-gray-900"
          >
            Data Level Caching
          </Link>
        </li>
        <li>
          <Link
            href="/ui-level-caching"
            className="text-gray-700 hover:text-gray-900"
          >
            UI Level Caching
          </Link>
        </li>
      </ul>
    </div>
  );
}
