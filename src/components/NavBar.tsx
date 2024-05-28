import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/AresGameZone.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={Logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack> //stacks
  );
};

export default NavBar;
