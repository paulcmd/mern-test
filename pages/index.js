import { signIn, signOut, useSession } from 'next-auth/client'

export default function Homepage() {
    const [session, loading] = useSession()

    return (
        <>
            {!session && (
                <>
                    Not Signed in <br />
                    <button onClick={() => signIn()}>Sign In</button>
                </>
            )}
            {session && (
                <>
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            )}
        </>
    )
}
