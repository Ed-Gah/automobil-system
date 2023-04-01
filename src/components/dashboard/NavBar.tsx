import React from "react";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();
  const links = [
    { name: "Home", link: "/dashboard" },
    { name: "About Us", link: "/about" },
    { name: "Get Help", link: "/help" },
    { name: "Login", link: "/dashboard/log-in" },
    { name: "Register", link: "/sign-up" },
  ];
  return (
    <nav className={`mt-12`}>
      <div className="flex justify-between">
        <div className="">
          <h1 className=" logo">SIGEA</h1>
        </div>
        <div className=" flex items-center">
          {links.map((link: any, i: any) => (
            <div key={i} className=" pr-9">
              <a
                className={
                  link.link === "Register"
                    ? "nav-links border-2 border-[var(--secondary-900)]"
                    : " nav-links"
                }
                onClick={() => router.push(`${link.link}`)}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
