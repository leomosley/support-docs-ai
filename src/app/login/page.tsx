import { GoogleLogin } from "@/components/login/google-login";
import { getServerSession } from "next-auth";
import { AUTH_OPTIONS } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(AUTH_OPTIONS);

  if (session) return redirect('/home');

  return (
    <main className="bg-grid flex flex-col justify-center min-h-screen">
      <div className="flex flex-col mt-24 items-center flex-1">
        <section>
          <div className="flex flex-col justify-center items-center mx-auto">
            <h1 className="text-3xl font-bold mb-2">Welcome</h1>
            <p className="text-gray-600 mb-8">Login to start creating</p>
            <GoogleLogin />
          </div>
        </section>
      </div>
    </main>
  );
};
