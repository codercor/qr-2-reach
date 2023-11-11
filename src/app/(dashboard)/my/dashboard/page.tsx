import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/login/?callbackUrl=/my/dashboard");
    }
    console.log("s", session)
    return (
        <main className="mx-auto mt-4 max-w-5xl px-6">
            <h2>
                {session !== null && (
                    <p className="text-4xl font-semibold">Hi {session?.user?.name ||session?.user?.fullName }!</p>
                )}
            </h2>
        </main>
    );
}