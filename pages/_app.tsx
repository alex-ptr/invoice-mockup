import { ChakraProvider } from "@chakra-ui/react";
import { SkipNavLink } from "@chakra-ui/skip-nav";

import Layout from "../components/layout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
