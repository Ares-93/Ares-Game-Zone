import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/AresGameZone.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack> //stacks
  );
};

export default NavBar;
