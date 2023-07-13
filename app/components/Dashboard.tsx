"use client";
import { useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import JSConfetti from "js-confetti";
import useTabContext from "../hooks/useTabContext";
import { useToggle } from "../hooks/useToggle";
import { directory } from "../utils/directory";
import Navbar from "./Navbar";
import NoTabs from "./NoTabs";
import DirectoryList from "./sidebar/DirectoryList";
import Drawer from "./sidebar/Drawer";
import Sidebar from "./sidebar/Sidebar";

export default function Dashboard() {
  const tabs = useTabContext();

  const [drawerOpen, toggleDrawer] = useToggle(false);
  const [sidebarOpen, toggleSidebar] = useToggle(true);

  useEffect(() => {
    const keyboardShortcuts = (e: any) => {
      if (e.key === "b" && e.metaKey) {
        window.innerWidth < 768 ? toggleDrawer() : toggleSidebar();
      }

      if (e.key === "k" && e.metaKey && e.shiftKey) {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
          confettiColors: [
            "#8be9fd",
            "#50fa7b",
            "#ff5555",
            "#ff79c6",
            "#bd93f9",
            "#f1fa8c",
          ],
        });
      }
    };

    window.addEventListener("keydown", keyboardShortcuts);

    return window.addEventListener("keydown", keyboardShortcuts);
  }, [toggleSidebar, toggleDrawer]);

  return (
    <div className="font-sans min-h-screen h-full md:h-screen flex overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="md:block hidden bg-dark-600">
        <button
          onClick={() => toggleSidebar()}
          className="min-h-[50px] min-w-[50px] bg-dark-600 flex items-center px-3 outline-none group"
        >
          <Bars3Icon className="text-white-50a w-6 h-6 group-focus:text-white-75a" />
        </button>
        <Sidebar open={sidebarOpen}>
          <DirectoryList directory={directory} />
        </Sidebar>
      </div>

      {/* Mobile drawer */}
      <Drawer isOpen={drawerOpen} toggle={toggleDrawer}>
        <DirectoryList directory={directory} callback={toggleDrawer} />
      </Drawer>

      {/* Main content and navbar */}
      <div className="flex-1 flex flex-col w-full overflow-hidden mt-[50px] md:mt-0">
        <Navbar toggleDrawer={toggleDrawer} />

        {tabs.current ? (
          <div className="font-mono pt-[32px] pb-[100px] px-4 md:px-9 overflow-y-auto flex-1">
            <div className="max-w-[1200px]">{tabs.current.component}</div>
          </div>
        ) : (
          <NoTabs />
        )}
      </div>
    </div>
  );
}