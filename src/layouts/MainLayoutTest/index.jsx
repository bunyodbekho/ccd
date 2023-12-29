import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Navbar from "components/Navbar";

export default function MainLayoutTest() {
  return (
    <Flex flexDir="column">
      <Navbar />
      <Outlet />
    </Flex>
  );
}
