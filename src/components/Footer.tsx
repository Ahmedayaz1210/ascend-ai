import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 bg-ascendPrimary sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-ascendWhite">
                © 2024 Ascend AI. All rights reserved.
            </p>
            {/* Could add this in future once app releases */}
            {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                    Terms of Service
                </Link>
                <Link className="text-xs hover:underline underline-offset-4" href="#">
                    Privacy
                </Link>
            </nav> */}
        </footer>
    );
}
