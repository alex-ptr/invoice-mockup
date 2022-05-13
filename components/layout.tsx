import NavBar from "./navbar";
import { SkipNavContent } from "@chakra-ui/skip-nav";
import { Stack } from "@chakra-ui/react";

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Stack direction="row" minHeight="100vh">
      <NavBar />
      <SkipNavContent />
      <Stack
        direction="column"
        minHeight="100vh"
        justifyContent="space-between"
      >
        {children}
      </Stack>
    </Stack>
  );
};

type Props = {
  children?: React.ReactNode;
};

export default Layout;
