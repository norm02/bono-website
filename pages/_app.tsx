import "../styles/globals.css";
import type { AppProps } from "next/app";
import { BaseContext } from "next/dist/shared/lib/utils";
import TagManager from "react-gtm-module";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps): BaseContext {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-PR49LG4" });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
