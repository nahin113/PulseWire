"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  console.log();
  return (
    <div className="container mx-auto flex justify-between items-center gap-4 mt-6">
      <div></div>
      <div>
        <ul className="flex justify-between items-center text-gray-700 gap-3">
          <li>
            <NavLink href={"/"} className="text-black font-bold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href={"/about-us"}>About</NavLink>
          </li>
          <li>
            <NavLink href={"/career"}>Career</NavLink>
          </li>
        </ul>
      </div>
      {isPending ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="loading loading-spinner loading-xl text-primary"></span>
        </div>
      ) : user ? (
        <div className="flex items-center gap-2">
          <Image
            className="rounded-full"
            src={user?.image || userAvatar}
            width={60}
            height={60}
            alt="User Avatar"
          />
          <div>
            <h2 className="font-semibold">{user?.name}</h2>
            <h2>{user?.email}</h2>
          </div>
          <button className="btn bg-red-500 text-white">
            <Link href={"/"} onClick={async ()=> await authClient.signOut()}>Logout</Link>
          </button>
        </div>
      ) : (
        <button className="btn bg-green-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
