import React from "react";
import { Box, Text, Heading, Image } from "gestalt";
import { NavLink } from "react-router-dom";
const Navbar = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    padding={1}
    shape="roundedBottom"
    color="midnight"
  >
    <NavLink activeClassName="active" to="/signIn">
      <Text size="xl" color="white">
        Sign In
      </Text>
    </NavLink>
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box height={50} width={50} margin={2}>
          <Image
            alt="Sidabs Labs"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          />
        </Box>
        <Heading size="xs" color="orange">
          Sidabs Labs
        </Heading>
      </Box>
    </NavLink>
    {/* Title and Logo */}
    <NavLink activeClassName="active" to="/signUp">
      <Text size="xl" color="white">
        Sign Up
      </Text>
    </NavLink>
  </Box>
);

export default Navbar;
