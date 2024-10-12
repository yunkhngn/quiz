import "@/styles/globals.css";
import { styletron } from "../styletron";
import { Provider as StyletronProvider } from "styletron-react";
import {Header} from "@/components/template";

export default function App({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron}>
      <Component {...pageProps} />
      <Header />
    </StyletronProvider>
  );
}
