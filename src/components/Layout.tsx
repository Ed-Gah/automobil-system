import React from "react";
import Footer from "./Footer";
import NavBar from "./home/NavBar2";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <div className={" min-h-screen w-full justify-center bg-primary-P25"}>
        {/* <div className=" max-w-[1300px]"> */}
          <NavBar />
          {children}
          <Footer />
        {/* </div> */}
      </div>
    </>
  );
};

export default Layout;
