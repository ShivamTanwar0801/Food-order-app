import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { useEffect, useState } from "react";

const RootLayout = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      });
    }
  }, []);

  return (
    <>
      <MainNavigation />
      <main className={`${isScrolling ? "scrolling" : undefined}`}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
