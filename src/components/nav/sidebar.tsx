import { Sparkles } from 'lucide-react';
import Image from 'next/image';
import { SideBarNav } from '@/components/nav/sidebar-nav';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { AUTH_OPTIONS } from '@/app/api/auth/[...nextauth]/route';

export async function Sidebar() {
  const session = await getServerSession(AUTH_OPTIONS);

  const PRODUCT_NAME = process.env.NEXT_PUBLIC_PRODUCT_NAME ?? "";
  const PRODUCT_LOGO = process.env.NEXT_PUBLIC_PRODUCT_LOGO ?? "";

  return session && (
    <aside className="flex flex-col h-screen w-72 bg-gray-100 -mt-16 border border-slate-200 z-50">
      <div className="p-4 mt-2">
        <div className="flex items-center mb-4 gap-2">
          {PRODUCT_LOGO ? (
            <Image
              width={50}
              height={50}
              src={PRODUCT_LOGO}
              alt={PRODUCT_NAME}
              className="w-12 h-12 rounded-md"
            />
          ) : (
            <Sparkles size={24} className="text-blue-700" />
          )}
          <Link
            className="text-xl font-semibold leading-tight"
            href="/home"
          >
            {PRODUCT_NAME}
          </Link>
        </div>
      </div>
      <SideBarNav />
      <div className="p-4 mt-auto border-t border-gray-200">
        <p className="text-sm text-gray-600">
          {"Transform Your Documents into an Interactive & Shareable Knowledge Hubs using AI."}
        </p>
      </div>
    </aside>
  );
}
