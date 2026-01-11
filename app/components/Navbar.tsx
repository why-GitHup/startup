import Link from 'next/link';
import Image from 'next/image';
import { auth, signOut, signIn } from '@/auth';

const Navbar = async () => {
    const session = await auth()
    
    return(
        <header className="px-5 py-3 bg-white/80 backdrop-blur-md shadow-md border-b border-blue-100 font-work-sans sticky top-0 z-50">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={50} height={30} />
                </Link>

                <div className="flex item-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                           <Link href={'/startups'}>
                                <span>
                                    Startups
                                </span>
                           </Link>
                           <Link href={'/startup/create'}>
                                <span>
                                    Create
                                </span>
                           </Link>
                           <form action= {async() => {
                                "use server";
                                await signOut({redirectTo: "/"})
                           }}>        
                                <button type="submit">
                                    Logout
                                </button>
                           </form>
                           <Link href={`/user/${session?.user?.id}`}>
                                <span>{session?.user?.name}</span>
                           </Link>
                        </>
                    ) : (
                        <form action={ async() => {
                            "use server";
                            await signIn('github')
                        }}>
                            <button type="submit">
                                <span>Login</span>
                            </button>
                        </form>
                    )}
                </div>
            </nav> 
        </header>
    )
}
export default Navbar;