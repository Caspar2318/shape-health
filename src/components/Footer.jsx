import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80x">
      <Stack gap="40px" alignItems="center" px="40px" pt="40px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h6" textTransform="capitalize" mt="20px" mb="40px">
          Keep learning to build coding muscles _ Caspar.C
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
