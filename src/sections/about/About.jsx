"use client";

import {
  Typography,
  Container,
  Stack,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { School } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionTypography = motion(Typography);
const MotionCard = motion(Card);
const MotionBox = motion(Box);

export default function About() {
  const { t } = useTranslation("about");

  const paragraphs = t("paragraphs", { returnObjects: true });
  const qualifications = t("qualifications", { returnObjects: true });

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <MotionTypography
        variant="h3"
        component="h2"
        gutterBottom
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        sx={{
          textAlign: "center",
          mb: 6,
          color: "#1A5F5C",
          fontWeight: 600,
        }}
      >
        {t("title")}
      </MotionTypography>

      <Stack direction="column" spacing={6} alignItems="flex-start">
        <Box sx={{ flex: 2 }}>
          {paragraphs.map((text, index) => (
            <MotionTypography
              key={index}
              variant="body1"
              paragraph
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.2 },
                },
              }}
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "primary.main",
              }}
            >
              {text}
            </MotionTypography>
          ))}

          <MotionTypography
            variant="body1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: paragraphs.length * 0.2 },
              },
            }}
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "primary.main",
              fontWeight: 500,
            }}
          >
            {t("closing")}
          </MotionTypography>
        </Box>

        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 1 },
            },
          }}
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <MotionCard
            sx={{
              width: "100%",
              maxWidth: 420,
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                {t("qualificationsTitle")}
              </Typography>
              <List dense>
                {qualifications.map((item, i) => (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <School sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </MotionCard>
        </MotionBox>
      </Stack>
    </Container>
  );
}
