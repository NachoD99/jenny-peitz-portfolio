"use client";

import {
  Typography,
  Container,
  Box,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionCard = motion(Card);
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionStack = motion(Stack);

export default function Philosophy() {
  const { t } = useTranslation("philosophy");
  const cards = t("cards", { returnObjects: true });
  const values = t("values", { returnObjects: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Título principal */}
      <MotionTypography
        variant="h4"
        component="h2"
        gutterBottom
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        sx={{
          textAlign: "center",
          mb: 6,
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        {t("title")}
      </MotionTypography>

      {/* Tarjetas animadas */}
      <MotionStack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        sx={{ mb: 6 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {cards.map((item, index) => (
          <MotionCard
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            sx={{
              flex: 1,
              height: "100%",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent sx={{ p: 4, minHeight: 150 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                {item.title}
              </Typography>
              {item.content.map((text, i) => (
                <Typography
                  key={i}
                  variant="body1"
                  sx={{ mb: i < item.content.length - 1 ? 2 : 0 }}
                >
                  {text}
                </Typography>
              ))}
            </CardContent>
          </MotionCard>
        ))}
      </MotionStack>

      {/* Título de valores */}
      <MotionTypography
        variant="h5"
        component="h3"
        gutterBottom
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        }}
        sx={{
          mt: 6,
          mb: 4,
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        {t("valuesTitle")}
      </MotionTypography>

      {/* Intro de valores */}
      <MotionTypography
        variant="body1"
        paragraph
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.4, delay: 0.2 } },
        }}
        sx={{ fontSize: "1.1rem", mb: 3, color: "primary.main" }}
      >
        {t("valuesIntro")}
      </MotionTypography>

      {/* Lista de valores */}
      <MotionStack
        direction="row"
        flexWrap="wrap"
        spacing={2}
        useFlexGap
        sx={{ gap: 2 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {values.map((value, index) => (
          <MotionBox
            key={index}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            sx={{
              flexBasis: { xs: "100%", sm: "100%" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Favorite sx={{ color: "secondary.main", mr: 2 }} />
            <Typography
              variant="body1"
              sx={{ color: "primary.main", textAlign: "left" }}
            >
              {value}
            </Typography>
          </MotionBox>
        ))}
      </MotionStack>
    </Container>
  );
}
