"use client";

import {
  Typography,
  Container,
  Box,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import { Work } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionStack = motion(Stack);
const MotionCard = motion(Card);

export default function Experience() {
    const { t } = useTranslation("experience");
  const experiences = t("experiences", { returnObjects: true });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <Box sx={{ backgroundColor: "#F8FFFE", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            mb: 6,
            color: "#1A5F5C",
            fontWeight: 600,
          }}
        >
          {t("title")}
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "primary.main", mb: 4 }}
        >
          {t("intro")}
        </Typography>

        <MotionStack
          spacing={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {experiences.map((experience, index) => (
            <MotionCard
              key={index}
              variants={cardVariants}
              sx={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)", width: "100%" }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                  <Work sx={{ color: "#2E7D7B", mr: 2, mt: 0.5 }} />
                  <Typography variant="body1" sx={{ color: "#333" }}>
                    {experience}
                  </Typography>
                </Box>
              </CardContent>
            </MotionCard>
          ))}
        </MotionStack>
      </Container>
    </Box>
  );
}
