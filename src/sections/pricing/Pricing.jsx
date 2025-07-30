"use client";

import {
  Typography,
  Container,
  Box,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { Schedule } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionStack = motion(Stack);

export default function Pricing() {
  const { t } = useTranslation("pricing");

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <Box sx={{ backgroundColor: "#F8FFFE", py: 8 }}>
      <Container maxWidth="lg">
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

        <MotionStack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="stretch"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Duración */}
          <MotionCard
            custom={0}
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
            <CardContent sx={{ p: 4, textAlign: "center" }}>
              <Schedule sx={{ fontSize: 48, color: "primary.main", mb: 2 }} />
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                {t("duration.title")}
              </Typography>
              <Typography variant="body1">{t("duration.line1")}</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {t("duration.line2")}
              </Typography>
            </CardContent>
          </MotionCard>

          {/* Costos */}
          <MotionCard
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            sx={{
              flex: 2,
              height: "100%",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "primary.main", fontWeight: 600 }}
              >
                {t("cost.title")}
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h5"
                  sx={{ color: "primary.main", fontWeight: 600 }}
                >
                  {t("cost.individual")}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: "primary.main",
                    fontWeight: 600,
                    mt: 1,
                  }}
                >
                  {t("cost.package")}
                </Typography>
              </Box>
              <Typography variant="body1" paragraph>
                {t("cost.note1")}
              </Typography>
              <Typography variant="body1">{t("cost.note2")}</Typography>
            </CardContent>
          </MotionCard>
        </MotionStack>
      </Container>
    </Box>
  );
}
