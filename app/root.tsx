import { ChakraProvider } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import theme from "~/theme";
import Fonts from "./Fonts";

type DocumentProps = {
  children: React.ReactNode;
  title?: string;
};

function Document({ children, title = "FriendshipBook" }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}
