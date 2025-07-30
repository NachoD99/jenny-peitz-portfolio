import {
  Typography,
  Container,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import { Phone, Email, Instagram } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <Box sx={{ backgroundColor: "primary.main", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          {/* Información institucional */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {t("title")}
            </Typography>
            <Typography variant="body2" paragraph>
              {t("description")}
            </Typography>
            <Typography variant="body2">
              {t("qualities")}
            </Typography>
          </Box>

          {/* Contacto */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {t("contact")}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">{t("email")}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">{t("video")}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Instagram sx={{ mr: 1 }} />
              <Typography variant="body2">@jennypsicologia</Typography>
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ my: 4, backgroundColor: "rgba(255,255,255,0.2)" }} />

        <Typography variant="body2" sx={{ textAlign: "center", opacity: 0.8 }}>
          © 2024 Jenny Peitz. {t("rights")}
        </Typography>
      </Container>
    </Box>
  );
}
