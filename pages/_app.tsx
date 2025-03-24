import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Navbar />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
