import React from "react";
import { useRouter } from "next/router";
export default function NavBars() {
  const router = useRouter();
  const links = [
    { name: "Home", link: "/dashboard" },
    { name: "About Us", link: "/about" },
    { name: "Get Help", link: "/help" },
    { name: "Login", link: "/dashboard/log-in" },
    { name: "Register", link: "/seller/registration" },
  ];
  return (
    <div className=" bg-[var(--app-bg-color)]">
      <nav
        className={`fixed top-0 bg-[var(--app-bg-color)] w-full left-0 pt-6 px-60`}
      >
        <div className="flex justify-between">
          <img src="../assets/images/logo.png" />
          {/* <h1 className=" logo">SIGEA</h1> */}

          <div className=" flex items-center">
            {links.map((link: any, i: any) => (
              <div key={i} className=" pr-9">
                <a
                  className={
                    link.name === "Register"
                      ? "nav-links border-2 border-[var(--secondary-900)] p-4 rounded-lg"
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
    </div>
  );
}
