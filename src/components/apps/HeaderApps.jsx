import { useState } from "react";
import Logo from "../../../public/images/LogoWebsite.svg";
import Image from "next/image";
import Link from "next/link";
import { SidebarApps } from "./SidebarApps";
import { Trigger } from "../utils/Trigger";
import { AppsMenuList } from "./AppsMenuList";
export const HeaderApps = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="bg-black">
      <div className="w-full container mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center">
          <Link href="/buyticket">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <AppsMenuList />

        <Trigger setStatus={setNav} />

        {/* Overlay */}
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        {/* Side Drawer Menu */}
        <SidebarApps status={nav} setStatus={setNav} />
      </div>
    </header>
  );
};
