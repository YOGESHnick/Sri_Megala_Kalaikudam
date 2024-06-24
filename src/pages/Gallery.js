import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
} from "@mui/material";
import Masonry from "@mui/lab/Masonry";

import Dance1 from "../assets/dance/dance1.jpeg";
import Dance2 from "../assets/dance/dance2.jpeg";
import Dance3 from "../assets/dance/dance3.jpeg";
// import Dance3Zoom from "../assets/dance/dance3_zoom.jpeg";
import Blue from "../assets/dance/blue.jpeg";
import Little from "../assets/dance/little.jpeg";
import Stage from "../assets/dance/stage.jpeg";
import Fun from "../assets/dance/fun_at_studio.jpeg";
// import Outdoor from "../assets/dance/outdoor.jpeg";
import Mini from "../assets/dance/outdoor.jpeg";
import Guru from "../assets/dance/akka.jpeg";
import Arangetram from "../assets/dance/arangetram.jpeg";

import Pumpkin from "../assets/drawing/pupkin.jpeg";
import Teach from "../assets/drawing/akka_teaches.jpeg";
import Draw from "../assets/drawing/akka_draws.jpeg";
import Boat from "../assets/drawing/boat.jpeg";
import Rose from "../assets/drawing/rose.jpeg";
import Leaf from "../assets/drawing/leaf.jpeg";
import Grapes from "../assets/drawing/grapes.jpeg";

const Image = styled("img")({
  maxWidth: "100%",
  height: "auto",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
});

const Gallery = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      {/* D A N C E   S E S S I O N S */}
      <Box
        backgroundColor="transparent"
        p={isSmallScreen ? 0 : 10}
        paddingBottom={isSmallScreen ? 2 : 0}
      >
        <Typography
          variant="junge"
          color="#BFA57B"
          fontSize={{ md: 40, xs: 25 }}
          fontWeight="bold"
          sx={{ lineHeight: isSmallScreen ? "1.0" : "normal" }}
        >
          OUR DANCE SESSIONS
        </Typography>
        <Box p={isSmallScreen ? 2 : 10} paddingBottom={isSmallScreen ? 2 : 0}>
          <Masonry columns={{ xs: 2, sm: 2, md: 2 }} sx={{ m: 0 }}>
            {[
              {
                src: Little,
                title: "Dance1",
              },
              {
                src: Dance3,
                title: "Dance-3",
              },
              {
                src: Blue,
                title: "Blue Dress",
              },
              {
                src: Dance1,
                title: "Dance1",
              },
              {
                src: Little,
                title: "Dance1",
              },
              {
                src: Dance2,
                title: "Dance-2",
              },
              {
                src: Dance3,
                title: "Dance-3",
              },
              {
                src: Stage,
                title: "Stage-dance",
              },
              {
                src: Fun,
                title: "Fun-in-class",
              },
              {
                src: Mini,
                title: "Stage-activities",
              },
              {
                src: Guru,
                title: "Guru",
              },
              {
                src: Arangetram,
                title: "Arangetram",
              },
            ].map((image, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                }}
              >
                <Image
                  key={index}
                  src={image.src}
                  style={{ width: "100%", height: "auto" }}
                  alt={`Image ${image.title}`}
                />
              </Box>
            ))}
          </Masonry>
        </Box>
        <Box
          p={isSmallScreen ? 2 : 0}
          mt={2}
          sx={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            width: "100%",
            maxWidth: "100%",
            "& iframe": {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            },
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/tv1UpKwTaT8?si=TLygVXtP3C0K1kKd"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>

      {/* D R A W I N G   S E S S I O N S */}

      <Box backgroundColor="transparent" p={isSmallScreen ? 0 : 10}>
        <Typography
          variant="junge"
          color="#BFA57B"
          fontSize={{ md: 40, xs: 25 }}
          fontWeight="bold"
          sx={{ lineHeight: isSmallScreen ? "1.0" : "normal" }}
        >
          OUR DRAWING WORKS
        </Typography>
        <Box p={isSmallScreen ? 2 : 10} paddingBottom={isSmallScreen ? 2 : 0}>
          <Masonry columns={{ xs: 2, sm: 2, md: 2 }} sx={{ m: 0 }}>
            {[
              
              {
                src: Grapes,
                title: "Grapes-sketch",
              },
              {
                src: Pumpkin,
                title: "Pumkin-sketch",
              },
            
              {
                src: Leaf,
                title: "Leaf-sketch",
              },
              {
                src: Draw,
                title: "Drawing",
              },
              
              {
                src: Rose,
                title: "Rose-sketch",
              },
              {
                src: Boat,
                title: "Boat-sketch",
              },
              {
                src: Teach,
                title: "Teaching",
              },
            ].map((image, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                }}
              >
                <Image
                  key={index}
                  src={image.src}
                  style={{ width: "100%", height: "auto" }}
                  alt={`Image ${image.title}`}
                />
              </Box>
            ))}
          </Masonry>
        </Box>
      </Box>
    </div>
  );
};

export default Gallery;
