"use client";

import {
  Typography,
  Container,
  Box,
  Button,
  Chip,
  Avatar,
} from "@mui/material";
import { Psychology, Verified, School } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionAvatar = motion(Avatar);

export default function Hero() {
  const { t } = useTranslation("hero");
  const chips = t("chips", { returnObjects: true });

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #E8F5F4 0%, #F0F9F8 100%)",
        py: 8,
        textAlign: "center",
        height: {xs: "auto", md: "50vh"},
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          gap={6}
        >
          {/* Texto principal */}
          <Box flex={1}>
            <MotionTypography
              variant="h2"
              component="h1"
              gutterBottom
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              sx={{
                fontWeight: 700,
                color: "primary.main",
                mb: 2,
                fontSize: {xs: 50, md: 70}
              }}
            >
              {t("title")}
            </MotionTypography>

            <MotionTypography
              variant="h5"
              gutterBottom
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              sx={{
                color: "primary.main",
                mb: 3,
                fontWeight: 400,
              }}
            >
              {t("subtitle")}
            </MotionTypography>

            <MotionBox
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                mb: 4,
                flexWrap: "wrap",
              }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {chips.map((chip, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Chip
                    label={t(`chips.${i}.label`)}
                    icon={
                      i === 0 ? <Psychology sx={{ color: "#fff" }} /> :
                      i === 1 ? <Verified sx={{ color: "#fff" }} /> :
                      <School sx={{ color: "#fff" }} />
                    }
                    sx={{
                      backgroundColor: "primary.main",
                      color: "#fff",
                    }}
                  />
                </motion.div>
              ))}
            </MotionBox>

            <MotionTypography
              variant="h6"
              gutterBottom
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              sx={{ color: "primary.main", mb: 3 }}
            >
              {t("ctaText")}
            </MotionTypography>

            <MotionButton
              variant="contained"
              size="large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              sx={{
                backgroundColor: "secondary.main",
                color: "primary.main",
                fontWeight: 600,
                px: 4,
                py: 2,
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "secondary.main",
                },
              }}
            >
              {t("ctaButton")}
            </MotionButton>
          </Box>

          {/* Avatar e información */}
          <Box flex={1} display="flex" flexDirection="column" alignItems="center">
            <MotionAvatar
              src="images/jennypeitz.jpg?height=300&width=300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              sx={{ width: 300, height: 300, border: "4px solid #124559" }}
            />
            <MotionTypography
              variant="h5"
              sx={{ mt: 2, color: "primary.main", fontWeight: 600 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Jenny Peitz
            </MotionTypography>
            <MotionTypography
              variant="subtitle1"
              sx={{ color: "primary.main" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {t("subtitleInfo")}
            </MotionTypography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
