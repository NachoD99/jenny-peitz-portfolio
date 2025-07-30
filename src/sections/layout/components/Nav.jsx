"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function PsychologistLanding() {
  const { t } = useTranslation("nav");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "primary.main",
        boxShadow: "none",
        width: "100%",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {t("title")}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Button onClick={scrollToContact} color="inherit" sx={{ fontWeight: 500 }}>
            {t("book")}
          </Button>

          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
