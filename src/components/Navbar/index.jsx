import styles from "./index.module.scss";
import { Link, NavLink } from "react-router-dom";
import {
  Flex,
  Image,
  Text,
  Button,
  Collapse,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Navbar() {
  // navbar has 2 color variants: black and white
  const [color, setColor] = useState("#fff");

  const toBlack = () => setColor("#000");
  const toWhite = () => setColor("#fff");

  // style to apply when NavLink is active
  const onActiveStyle = {
    borderBottom: `2px solid ${color}`,
    transition: "0.4s",
  };
  const onActive = ({ isActive }) => (isActive ? onActiveStyle : null);

  // state for Drawer
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Flex
      justifyContent="space-between"
      p="42px 7%"
      bg="red"
      color={color}
      fontSize="16px"
      fontWeight="600"
      pos="sticky"
      top="0px"
      left="0px"
      right="0px"
      flexDir="column"
      maxH="100vh"
    >
      <Flex justifyContent="space-between">
        <Link to="/" onClick={toWhite}>
          {color === "#fff" && (
            <Image
              src="./assets/imgs/navbar/logo-white.svg"
              w={{ sm: "120px", lg: "150px" }}
            />
          )}
          {color === "#000" && (
            <Image
              src="./assets/imgs/navbar/logo-black.svg"
              w={{ sm: "120px", lg: "150px" }}
            />
          )}
        </Link>

        <Flex gap="40px" display={{ base: "none", sm: "none", lg: "flex" }}>
          <NavLink
            style={onActive}
            className={styles.navlink}
            to="/company"
            onClick={toBlack}
          >
            Company
          </NavLink>
          <NavLink
            style={onActive}
            className={styles.navlink}
            to="/services"
            onClick={toBlack}
          >
            Our Services
          </NavLink>
          <NavLink
            style={onActive}
            className={styles.navlink}
            to="/contact-us"
            onClick={toBlack}
          >
            Contact us
          </NavLink>
        </Flex>

        <Flex alignItems="center" gap="7px" cursor="pointer" onClick={onToggle}>
          <Text>{!isOpen ? "Menu" : "Close"}</Text>
          {color === "#fff" && !isOpen && (
            <Image src="./assets/imgs/navbar/menu-white.svg" />
          )}
          {color === "#000" && !isOpen && (
            <Image src="./assets/imgs/navbar/menu-black.svg" />
          )}
          {isOpen && <Image src="./assets/imgs/navbar/close.svg" />}
        </Flex>
      </Flex>

      <Collapse
        in={isOpen}
        transition={{ exit: { duration: 0.4 }, enter: { duration: 0.5 } }}
      >
        <Flex
          p="40px"
          color="white"
          mt="4"
          rounded="md"
          shadow="md"
          flexDir="column"
        >
          <NavLink to="/" onClick={onClose} className={styles.menu}>
            <Box
              h="2px"
              bg="black"
              w={({ onActive }) => (onActive ? "20px" : "0px`")}
            ></Box>
            Main
          </NavLink>
          <NavLink to="/company" onClick={onClose} className={styles.menu}>
            Company
          </NavLink>
          <NavLink
            to="/certifications"
            onClick={onClose}
            className={styles.menu}
          >
            Certifications
          </NavLink>
          <NavLink to="/news" onClick={onClose} className={styles.menu}>
            News
          </NavLink>
          <NavLink to="/services" onClick={onClose} className={styles.menu}>
            Services
          </NavLink>
          <NavLink to="/contact-us" onClick={onClose} className={styles.menu}>
            Contact us
          </NavLink>
        </Flex>
      </Collapse>
    </Flex>
  );
}
