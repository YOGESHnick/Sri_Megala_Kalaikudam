import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Grid,
  Stack,
} from "@mui/material";
import YouTube from "../assets/yt_logo.png";

const Image = styled("img")({
  maxWidth: "70%",
  height: "auto",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
});

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Box bgcolor="#38434A" textAlign="center" p={isSmallScreen ? 5 : 10}>
        <Box backgroundColor="transparent" textAlign="left">
          <Typography
            variant="bebasNeue"
            color="#BFA57B"
            fontSize={{ md: 48, xs: 30 }}
            textAlign="left"
            fontWeight="bold"
            sx={{ lineHeight: isSmallScreen ? "1.0" : "normal" }}
            letterSpacing={2}
          >
            SRI MEGALA KALAIKUDAM
          </Typography>
        </Box>
        {/* next line */}
        <Box mt={5} backgroundColor="transparent" textAlign="center">
          <Grid container spacing={2}>
            {/* First Column */}
            <Grid item xs={12} sm={4} mt={5}>
              <Box backgroundColor="transparent" textAlign="left">
                <Typography
                  textAlign="left"
                  display="block"
                  variant="bebasNeue"
                  color="#D9D9D9"
                  fontWeight={700}
                  letterSpacing={2}
                  fontSize={{ md: 30, xs: 25 }}
                >
                  Branch 1
                </Typography>
                <Typography
                  textAlign="left"
                  variant="ptSerif"
                  fontWeight={700}
                  letterSpacing={1}
                  color="#BFA57B"
                  fontSize={{ md: 20, xs: 15 }}
                >
                  Plot no. 1 07, door no. 1 ,<br />
                  3rd cross street, padmavathy Nagar extension, <br />
                  Madambakkam, Chennai- 600126
                </Typography>
              </Box>
            </Grid>

            {/* Second Column */}
            <Grid item xs={12} sm={4} mt={5}>
              <Box backgroundColor="transparent" textAlign="left">
                <Typography
                  textAlign="left"
                  display="block"
                  variant="bebasNeue"
                  color="#D9D9D9"
                  fontWeight={700}
                  letterSpacing={2}
                  fontSize={{ md: 30, xs: 25 }}
                >
                  Branch 2
                </Typography>
                <Typography
                  textAlign="left"
                  variant="ptSerif"
                  fontWeight={700}
                  letterSpacing={1}
                  color="#BFA57B"
                  fontSize={{ md: 20, xs: 15 }}
                >
                  RajParis crystal spring apartment,
                  <br />
                  Mambakkam main road , Chithalapakkam, <br />
                  Madambakkam, Chennai- 600126
                </Typography>
              </Box>
            </Grid>
            {/* Third Column */}
            <Grid item xs={12} sm={4} mt={5}>
              <Box backgroundColor="transparent" textAlign="center">
                <Stack backgroundColor="transparent">
                  <Typography
                    textAlign={isSmallScreen ? "left" : "right"}
                    display="block"
                    variant="bebasNeue"
                    color="#D9D9D9"
                    fontWeight={700}
                    letterSpacing={2}
                    fontSize={{ md: 30, xs: 25 }}
                  >
                    Quick Links
                  </Typography>
                  <Typography
                    textAlign={isSmallScreen ? "left" : "right"}
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/">
                      Home
                    </a>
                  </Typography>
                  <Typography
                    textAlign={isSmallScreen ? "left" : "right"}
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="bharathanatyam-and-drawing">
                      Classes
                    </a>
                  </Typography>
                  <Typography
                    textAlign={isSmallScreen ? "left" : "right"}
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/gallery">
                      Gallery
                    </a>
                  </Typography>
                  <Typography
                    textAlign={isSmallScreen ? "left" : "right"}
                    variant="ptSerif"
                    fontWeight={700}
                    letterSpacing={1}
                    color="#BFA57B"
                    fontSize={{ md: 20, xs: 15 }}
                  >
                    <a className="footerLink" href="/contact">
                      Contact
                    </a>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* next line */}
        <Box backgroundColor="transparent" mt={7} mb={5} textAlign="center">
          <a
            href="https://www.youtube.com/@deepikamegalaschool6412"
            target="_blank" rel="noreferrer"
          >
            <Image
              style={{
                width: isSmallScreen ? "60%" : "50%",
                maxWidth: "100px",
                backgroundColor: "transparent",
              }}
              src={YouTube}
              alt="YouTube-logo"
            />
          </a>
        </Box>
        <a href="https://shamlin.dev" target="_blank" rel="noreferrer" >
        <Typography
          textAlign={isSmallScreen ? "left" : "right"}
          variant="ptSerif"
          fontWeight={400}
          color="#BFA57B"
          marginRight={1}
          fontSize={{ md: 15, xs: 10 }}
        >
          Developed and maintained by Shamlin and
        </Typography>
        </a>
        <a href="https://www.linkedin.com/in/sivaganesh-natarajavel-567a56237/" target="_blank" rel="noreferrer" >
        <Typography
          textAlign={isSmallScreen ? "left" : "right"}
          variant="ptSerif"
          fontWeight={400}
          color="#BFA57B"
          fontSize={{ md: 15, xs: 10 }}
        >
          Sivaganesh
        </Typography>
        </a>
      </Box>
    </div>
  );
};

export default Footer;
