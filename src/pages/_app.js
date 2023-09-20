import {
  ThirdwebProvider,
  localWallet,
  metamaskWallet,
  paperWallet,
} from "@thirdweb-dev/react";
import "../../styles/globals.css";
import { chainId } from "../../const/mydetails";
export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={chainId}
      supportedWallets={[
        metamaskWallet(),
        paperWallet({
          paperClientId: "3012e8ba-000b-44d4-9b24-52050f2c6086",
        }),
        localWallet(),
      ]}
      clientId="c40363e937d5ddb52923ed7313ed45c8"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
