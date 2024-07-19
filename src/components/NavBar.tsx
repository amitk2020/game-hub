import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"15px"}>
      <Image src={logo} boxSize="40px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
