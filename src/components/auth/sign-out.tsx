"use client";

import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function SignOut() {
  return (
    <button
      className="cursor-pointer bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg flex items-center space-x-2 text-sm"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <LogOut size={18} />
      <span>Sign out</span>
    </button>
  )
}