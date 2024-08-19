import { AUTH_OPTIONS } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

export async function Avatar() {
  const session = await getServerSession(AUTH_OPTIONS);
  return (
    <div className="w-8 rounded-full bg-gray-200 flex overflow-hidden">
      {session?.user?.image && (
        <Image
          width={60}
          height={60}
          src={session.user.image}
          alt="user profile"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
