import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ShoppingBag } from "@mui/icons-material";

export default function Album() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <ShoppingBag sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Shoppy
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
