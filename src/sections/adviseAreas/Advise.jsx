"use client";

import {
  Typography,
  Container,
  Stack,
  Card,
  CardContent,
  Paper,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionStack = motion(Stack);
const MotionCard = motion(Card);

export default function Advise() {
  const { t } = useTranslation("advise");

  const areas = t("areas", { returnObjects: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          textAlign: "center",
          mb: 6,
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        {t("title")}
      </Typography>

      <MotionStack
        spacing={3}
        useFlexGap
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {areas.map((area, index) => (
          <Box
            key={index}
            sx={{
              flexBasis: {
                xs: "100%",
                md: "48%",
              },
              display: "flex",
            }}
          >
            <MotionCard
              variants={cardVariants}
              sx={{
                flexGrow: 1,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <CardContent>
                <Typography variant="body1" sx={{ color: "primary.main" }}>
                  • {area}
                </Typography>
              </CardContent>
            </MotionCard>
          </Box>
        ))}
      </MotionStack>

      <Paper
        sx={{
          mt: 4,
          p: 3,
          backgroundColor: "#FFF8E1",
          border: "1px solid #F4B942",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#1A5F5C", fontStyle: "italic" }}
        >
          {t("note")}
        </Typography>
      </Paper>
    </Container>
  );
}
