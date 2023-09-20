import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
export const SidebarAppsMenuList = ({ active }) => {
  return (
    <nav className="mt-4">
      <ul className="flex flex-col gap-1">
        <Link
          className={`text-gray-400 outline-none text-lg flex items-center px-6 py-2.5 ${
            active && "bg-gray-800"
          } hover:bg-gray-800`}
          href="/buyticket"
        >
          Buy Ticket
        </Link>
        <Link
          className={`text-gray-400 outline-none text-lg flex items-center px-6 py-2.5 ${
            active && "bg-gray-800"
          } hover:bg-gray-800`}
          href="/mynft"
        >
          My Ticket
        </Link>
        <Link
          className={`text-gray-400 outline-none text-lg flex items-center px-6 py-2.5 ${
            active && "bg-gray-800"
          } hover:bg-gray-800`}
          href="/verify"
        >
          Verify Ticket
        </Link>
        <div className="pl-6">
          {" "}
          <ConnectWallet
          theme={"dark"}
          btnTitle={"Connect Wallet"}
          modalTitle={"NFTicketing"}
          switchToActiveChain={true}
          modalSize={"wide"}
          className="text-white"
          hideTestnetFaucet={"true"}
        />
        </div>
      </ul>
    </nav>
  );
};
