"use client"
import { Box } from "@mui/material"
import Hero from "../hero/Hero"
import Advise from "../adviseAreas/Advise"
import CTA from "../cta/CTA"
import About from "../about/About"
import Experience from "../experience/Experience";
import Phisolophy from "../philosophy/Philosophy";
import Pricing from "../pricing/Pricing";
import Contact from "../contact/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function PsychologistLanding() {
  return (
    <Box sx={{ width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Header */}
      <Nav/>

      {/* Hero Section */}
      <Hero/>

      {/* Areas de Asesoría */}
      <Advise/>

      {/* CTA Section */}
      <CTA/>

      {/* About Section */}
      <About/>

      {/* Experience Section */}
      <Experience/>

      {/* Philosophy Section */}
      <Phisolophy/>

      {/* Pricing Section */}
      <Pricing/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </Box>
  )
}
