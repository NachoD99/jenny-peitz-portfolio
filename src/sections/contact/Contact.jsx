"use client";

import {
    Typography,
    Container,
    Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

export default function Contact() {
    const { t } = useTranslation("contact");

    return (
        <Container id="contact" maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
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
                sx={{ mb: 4, color: "primary.main", fontWeight: 600 }}
            >
                {t("title")}
            </MotionTypography>

            <MotionTypography
                variant="body1"
                paragraph
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                sx={{ color: "primary.main", fontSize: "1.1rem", mb: 4 }}
            >
                {t("description")}
            </MotionTypography>

            <MotionTypography
                variant="h6"
                gutterBottom
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                sx={{ color: "primary.main", mb: 3 }}
            >
                {t("initialConsultation")}
            </MotionTypography>

            <MotionButton
                variant="contained"
                size="large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                onClick={() => {
                    const phoneNumber = "+34600748797"; // reemplazá con tu número internacional (sin "+" o espacios)
                    const message = encodeURIComponent(t("whatsappMessage"));
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                }}
                sx={{
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    fontWeight: 600,
                    px: 4,
                    py: 2,
                    fontSize: "1.1rem",
                    mb: 4,
                    "&:hover": {
                        backgroundColor: "secondary.main",
                    },
                }}
            >
                {t("cta")}
            </MotionButton>


            <MotionTypography
                variant="body1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                sx={{ color: "primary.main", fontSize: "1.1rem" }}
            >
                {t("note")}
            </MotionTypography>
        </Container>
    );
}
