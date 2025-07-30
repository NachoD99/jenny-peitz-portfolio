"use client";

import {
  Typography,
  Container,
  Box,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function CTA() {
    const { t } = useTranslation("cta");

  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        py: 6,
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <MotionTypography
          variant="h4"
          gutterBottom
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          sx={{ color: "primary.main", fontWeight: 600 }}
        >
          {t("title")}
        </MotionTypography>

        <MotionTypography
          variant="h6"
          gutterBottom
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          sx={{ color: "primary.main", mb: 3 }}
        >
          {t("subtitle")}
        </MotionTypography>

        <MotionButton
          variant="contained"
          size="large"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            fontWeight: 600,
            px: 6,
            py: 2,
            fontSize: "1.2rem",
          }}
        >
           {t("button")}
        </MotionButton>
      </Container>
    </Box>
  );
}
