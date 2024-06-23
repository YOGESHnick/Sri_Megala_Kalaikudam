import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Grid,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Introo from "../assets/introo.png";
import Hero from "../assets/Hero.png";
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

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box textAlign="center" mx="auto">
        <Image
          src={Introo}
          alt="Natarajar image"
          style={{ width: isSmallScreen ? "100%" : "auto" }}
        />
      </Box>

      {/* D I S C O V E R   E S S E N C E  O F  B H A R A T H A N A T Y A M */}

      <Box bgcolor="#B12C2C" textAlign="center" p={10}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ m: 0 }} textAlign="left">
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 48, xs: 30 }}
              color="#F7C97E"
              textAlign="left"
              display="block"
            >
              DISCOVER ESSENCE OF BHARATHANATYAM
            </Typography>
            <Typography
              variant="ptSerif"
              textAlign="left"
              fontSize={{ md: 20, xs: 18 }}
              color="white"
              sx={{ marginBottom: 2 }}
              display="block"
            >
              Immerse yourself in the ancient art of Bharatanatyam with our
              all-encompassing learning program. We present this age-old dance
              form, cultivating your artistic talents and enhancing your
              cultural appreciation. Embark on a path where tradition merges
              with excellence, and each gesture narrates a tale of elegance,
              rhythm, and dedication.
            </Typography>
            <button>
              <Link className="Link" to="/contact">
                Why us?
              </Link>
            </button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={Hero}
              alt="Natarajar image"
              style={{
                width: isSmallScreen ? "60%" : "50%",
                maxWidth: "200px",
                backgroundColor: "transparent",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* A B O U T   T H E   G U R U  */}

      <Box textAlign="center" p={10}>
        <Typography
          variant="bebasNeue"
          fontSize={{ md: 48, xs: 30 }}
          color="black"
          display="block"
          mb={5}
        >
          ABOUT THE GURU
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
              fontSize={{ md: 48, xs: 30 }}
              color="black"
              textAlign="left"
              display="block"
            >
              Deepika l
            </Typography>
            <Typography
              variant="ptSerif"
              textAlign="left"
              fontSize={{ md: 20, xs: 18 }}
              color="black"
              sx={{ marginBottom: 2 }}
              display="block"
            >
              A highly accomplished Bharatanatyam dancer and dedicated teacher
              with a B.A. and M.A. in Bharatanatyam from Tamil University and
              Tamil Nadu Dr. J. Jayalalithaa Music and Fine Arts University,
              respectively. She has extensive professional experience and
              numerous accolades, committed to nurturing her students' artistic
              talents and fostering their growth in dance.
            </Typography>
            <button>
              <Link className="Link" to="/contact">
                Know More
              </Link>
            </button>
          </Grid>
        </Grid>
      </Box>

      {/* W H A T   W E   P R O V I D E */}
      <section id="classes">
        <Box bgcolor="#FFD700" textAlign="center" p={10}>
          <Typography
            variant="bebasNeue"
            fontSize={{ md: 48, xs: 30 }}
            color="black"
            display="block"
            mb={5}
          >
            WHAT WE PROVIDE?
          </Typography>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={6}>
              <Image
                src={DanceLogo}
                alt="DanceLogo image"
                style={{
                  // width: isSmallScreen ? "80%" : "90%",
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
                  // width: isSmallScreen ? "80%" : "50%",
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
            // mb={5}
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
        </Box>
      </section>
    </div>
  );
};

export default Home;
