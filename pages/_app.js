import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

// App component
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // Use a constant for the session prop to ensure it's not modified unintentionally
  const sessionProp = session;
  // Return the SessionProvider with the updated session prop
  return (
    <SessionProvider session={sessionProp}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
