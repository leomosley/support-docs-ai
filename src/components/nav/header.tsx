import { AUTH_OPTIONS } from "@/app/api/auth/[...nextauth]/route";
import { FolderDot } from "lucide-react";
import { getServerSession } from "next-auth";

import { SignOut } from "@/components/auth/sign-out";
import Link from "next/link";
import { Avatar } from "../common/avatar";

export async function Header() {
  const session = await getServerSession(AUTH_OPTIONS);

  return (
    <header className="sticky top-0 bg-white border-b flex flex-col border-b-gray-200 h-16 justify-center">
      <div className="px-4 py-3 flex right-10 flex-end space-x-4">
        <nav className="ml-auto flex space-x-2 items-center">
          <Link
            className="text-gray-800 mr-8"
            href="/quick-start"
            prefetch={true}
          >
            Quick Start
          </Link>
          {session ? (
            <>
              <Avatar />
              <span className="text-sm">{session.user?.name}</span>
              <div className="px-2">
                <SignOut />
              </div>
              <Link
                className="flex cursor-pointer border border-gray-200 hover:bg-gray-100 py-2 px-4 rounded-lg items-center gap-2"
                href="/admin"
                prefetch={true}
              >
                <FolderDot size={18} />
                <span>Documents Manager</span>
              </Link>
            </>
          ) : (
            <Link
              className="bg-white py-2 px-4 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100"
              href="/login"
            >
              Log in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
