import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
