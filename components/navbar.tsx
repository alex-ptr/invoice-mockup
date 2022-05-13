import {
  Box,
  Stack,
  IconProps,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { TimeIcon, SunIcon } from "@chakra-ui/icons";

import Link, { LinkProps } from "next/link";

const NavBar: React.FC = () => (
  <Stack
    as="nav"
    top={0}
    left={0}
    w="300px"
    bg="gray.700"
    color="white"
    p={4}
    justifyContent="space-between"
  >
    <Box>
      <Box>Application</Box>
      <List mt={20}>
        <Item label="Tableau de bord" />
        <Item label="Clients" />
        <Item label="Projets" />
        <Item label="Articles" />
      </List>
      <List mt={20}>
        <Item label="Devis" />
        <Item label="Factures" />
        <Item label="Reçus" />
        <Item label="Avoirs" />
      </List>
    </Box>
    <Box>
      <List mt={8}>
        <Item label="Alexandre Peter" />
        <Item label="Paramètres" />
      </List>
    </Box>
  </Stack>
);

const Item: React.FC<ItemProps> = ({ icon = SunIcon, label, href = "/" }) => (
  <Link href={href}>
    <ListItem bg="gray.500" p={4} w="100%" borderRadius={3} mb="3px">
      <a>
        <ListIcon as={icon} />
        {label}
      </a>
    </ListItem>
  </Link>
);

type ItemProps = LinkProps & {
  icon?: import("@chakra-ui/system").ComponentWithAs<"svg", IconProps>;
  label: string;
};
export default NavBar;
