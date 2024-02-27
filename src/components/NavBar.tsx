import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/AresGameZone.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack> //stacks
  );
};

export default NavBar;
