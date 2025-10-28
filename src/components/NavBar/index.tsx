import { auth, signIn, signOut } from "auth";
import Link from "next/link";
export default async function NavBar() {
  const session = await auth();

  return (
    <div>
      <Link href="/">Home</Link>
      {session ? (
        <>
          <Link href="/dashboard">Dashboard</Link>
          <button onClick={() => signOut()}>Sign out</button>
          <div>
            <p>{session.user?.name}</p>
          </div>
        </>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button>Sign in</button>
        </form>
      )}
    </div>
  );
}
