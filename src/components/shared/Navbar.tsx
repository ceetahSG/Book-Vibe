import React from "react";
import logo from "@/assetes/book.ico";
import Image from "next/image";
import Link from "next/link";
const links = (
  <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/books">Total Books</Link>
    </li>
    <li>
      <Link href="/listed-books">Listed Books</Link>
    </li>
    <li>
      <Link href="/read-books">Read Books</Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-3 sm:px-4">
        <div className="navbar-start min-w-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Image src={logo} alt="Book Vibe logo" width={32} height={32} />
          <Link href="/" className="btn btn-ghost min-w-0 px-2 text-lg sm:text-xl">
            <span className="truncate">Book Vibe</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-1 sm:gap-2">
          <button className="btn btn-success btn-sm sm:btn-md">Sign in</button>
          <button className="btn btn-active btn-sm sm:btn-md">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
