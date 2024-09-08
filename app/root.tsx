import { Links, Meta, Outlet, Scripts, ScrollRestoration, } from "@remix-run/react";
import './styles.css'
import Header from "./routes/components/Header";
import Footer from "./routes/components/Footer";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
