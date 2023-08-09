import Link from "next/link";
import Dark from "./Dark";

export default function Navbar() {

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href="/">
                        <h1 className="text-2xl font-medium"><span className="text-rose-700 dark:text-pink-500 font-mono">Coding </span> <span className="text-violet-600 dark:text-cyan-400 font-mono"> Assistant</span></h1>
                    </Link>
                    <Dark />
                </div>
            </div>


        </div>
    )

}