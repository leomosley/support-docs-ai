"use client";

import { ExternalLink, NotebookPen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideBarNav() {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-2">
      {pathname === "/admin" ? (
        <Link
          className="flex items-center py-2 text-gray-700 space-x-2"
          href="/admin"
        >
          <NotebookPen size={18} />
          <span>Documents Manager</span>
        </Link>
      ) : (
        <Link
          className="flex items-center py-2 text-gray-700 space-x-2"
          href="/"
          target="_blank"
        >
          <ExternalLink size={18} />
          <span>New Thread</span>
        </Link>
      )}
    </nav>
  );
};
