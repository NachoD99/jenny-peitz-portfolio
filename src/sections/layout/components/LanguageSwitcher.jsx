"use client";

import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
    Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function PsychologistLanding() {
    const { t, i18n } = useTranslation("nav");
    const [language, setLanguage] = useState(i18n.language || "es");

    const handleChange = (event) => {
        const selectedLang = event.target.value;
        setLanguage(selectedLang);
        i18n.changeLanguage(selectedLang);
    };

    return (
        <FormControl variant="standard" sx={{ minWidth: 60 }}>
            <Select
                value={language}
                onChange={handleChange}
                disableUnderline
                sx={{
                    color: "white",
                    fontWeight: 500,
                    "& .MuiSelect-icon": { color: "white" },
                }}
            >
                <MenuItem value="es">ES</MenuItem>
                <MenuItem value="en">EN</MenuItem>
                <MenuItem value="de">DE</MenuItem>
            </Select>
        </FormControl>
    );
}
