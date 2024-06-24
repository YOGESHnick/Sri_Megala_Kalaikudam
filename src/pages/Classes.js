import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Grid,
} from "@mui/material";
import Hero2 from "../assets/Hero2.png";
import DanceLogo from "../assets/DanceLogo.png";
import DrawingLogo from "../assets/DrawingLogo.png";

const Image = styled("img")({
  maxWidth: "70%",
  height: "auto",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
});

const Classes = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box textAlign="center" p={isSmallScreen ? 5 : 10}>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="#BFA57B"
          letterSpacing={2}
          fontWeight="bold"
          display="block"
          mb={5}
        >
          Learn the art of Bharatanatyam
        </Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Image
              src={Hero2}
              alt="Natarajar image"
              style={{
                width: isSmallScreen ? "80%" : "90%",
                maxWidth: "300px",
                backgroundColor: "transparent",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ m: 0 }} textAlign="left">
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 40, xs: 30 }}
              color="black"
              textAlign="left"
              display="block"
            >
              The Science, Movement and Performance…
            </Typography>
            <Typography
              variant="ptSerif"
              textAlign="left"
              fontSize={{ md: 20, xs: 18 }}
              color="black"
              sx={{ marginBottom: 2 }}
              display="block"
            >
              Bharatanatyam, one of India's oldest classical dance forms,
              originates from the temples of Tamil Nadu. Known for its elegant
              posture, intricate footwork, expressive hand gestures (mudras),
              and nuanced facial expressions (abhinaya), Bharatanatyam was
              initially performed by Devadasis during temple rituals. Today, it
              has transitioned from temples to royal courts and modern stages,
              embodying timeless beauty and storytelling through each movement
              that narrates tales of devotion, culture, and artistry.
            </Typography>
            <a className="Link" href="/contact">
              <button>Contact us</button>
            </a>
          </Grid>
        </Grid>
      </Box>
      <Box bgcolor="#FFD700" textAlign="center" p={isSmallScreen ? 5 : 10}>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="black"
          display="block"
          mb={5}
        >
          WHAT WE PROVIDE?
        </Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Image
              src={DanceLogo}
              alt="DanceLogo image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 48, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              BHARATHANATYAM
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={DrawingLogo}
              alt="DrawingLogo image"
              style={{
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 48, xs: 30 }}
              color="black"
              display="block"
              mb={5}
            >
              DRAWING
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="black"
          display="block"
        >
          Learn the best of these fine arts
        </Typography>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="black"
          display="block"
          mb={5}
        >
          From the best
        </Typography>
        <Box
          textAlign="center"
          backgroundColor="transparent"
          justifyContent="center"
          px={isSmallScreen ? 1 : 20}
        >
          <Typography
            variant="ptSerif"
            textAlign="center"
            fontSize={{ md: 25, xs: 22 }}
            color="black"
            sx={{ marginBottom: 2 }}
            display="block"
            fontWeight="bold"
          >
            Learn the best of the skills, from us at Sri Megala Kalaikudam.
          </Typography>
          <Typography
            variant="ptSerif"
            textAlign="center"
            fontSize={{ md: 25, xs: 22 }}
            color="black"
            sx={{ marginBottom: 2 }}
            display="block"
            fontWeight="bold"
          >
            We operate at two centers and different times too! Choose the most
            appropriate one and join us!
          </Typography>
        </Box>
        <a   href="/contact">
          <button className="classes" >Gallery</button>
        </a>
      </Box>
    </div>
  );
};

export default Classes;
