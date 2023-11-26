"use client";
import { AppProps } from "next/app";
import Cookies from "js-cookie";
import "@/assets/css/tailwind.css";
import "@/assets/css/global.css";
import { config } from "../wagmi";
import { WagmiConfig } from "wagmi";
import { UserContext, UserProvider } from "@/context/UserContext";
import { useContext, useEffect } from "react";
import { getCookie } from "cookies-next";
import withAuth from "./WrappedComponent";
import setAuthToken from "@/utils/setAuthToken";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { setAuthenticated } = useContext(UserContext);

  let jwtToken: any = "";
  if (typeof window !== "undefined") {
    // Perform localStorage action
    jwtToken = localStorage.getItem("token");
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      console.log(token, "token");
      setAuthToken(token);
      setAuthenticated(true);
    }
  }, [jwtToken]);
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
};
export default withAuth(MyApp);
