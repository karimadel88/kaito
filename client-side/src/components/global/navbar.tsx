import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {}

const Navbar: React.FC<Props> = ({}) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Kai</p>
        <Image
          src="/logo.png"
          width={15}
          height={15}
          alt="logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">to</p>
      </aside>

      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none font-3xl">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentations</Link>
          </li>
          <li>
            <Link href="#">Enterprise </Link>
          </li>
        </ul>
      </nav>

      <aside className="flex items-center gap-4">
        <Link href="/dashboard" className="p-[3px] relative">
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <span className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {true ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {/* {user ? <UserButton afterSignOutUrl="/" /> : null}*/}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
