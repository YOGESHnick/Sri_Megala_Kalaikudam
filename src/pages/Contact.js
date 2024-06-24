import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Image = styled("img")({
  maxWidth: "70%",
  height: "auto",
  display: "block",
  margin: "auto",
  backgroundColor: "transparent",
});

const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Box textAlign="center" p={10} paddingRight={isSmallScreen ? 10 : 20}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ m: 0 }} textAlign="left">
            <Image
              src="./assets/logo.png"
              alt="Natarajar image"
              style={{
                width: isSmallScreen ? "80%" : "90%",
                maxWidth: "300px",
                backgroundColor: "transparent",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <form
              action="https://formsubmit.co/zoftvarelabs@gmail.com"
              method="POST"
            >
              <Typography
                variant="bebasNeue"
                fontSize={{ md: 48, xs: 30 }}
                color="black"
                display="block"
              >
                LEAVE US A MESSAGE
              </Typography>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              ></input>
              <input
                type="tel"
                pattern="[0-9]{10}"
                required
                id="phone"
                name="phone"
                placeholder="Phone no."
              ></input>
              <textarea
                id="Query"
                rows="4"
                name="Query"
                placeholder="Queries (If any)"
              ></textarea>
              <button type="submit">
                <SendIcon sx={{ backgroundColor: "transparent" }} />
                Send
              </button>
            </form>
          </Grid>
        </Grid>
      </Box>

      {/* A D D R E S E S  */}

      {/* B R A N C H  1 */}

      <Box bgcolor="#38434A" textAlign="center" p={isSmallScreen?2:10}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
          <iframe title="Branch 1" width="100%" height="400px" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.041769896624!2d80.14804099999999!3d12.905035699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0044b7dc79%3A0xaaa5a77278f3299!2sSri%20Megala%20Kalaikudam!5e0!3m2!1sen!2sin!4v1719243476228!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
          <Grid item xs={12} md={6} sx={{ m: 0 }} textAlign="right">
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 48, xs: 30 }}
              color="#BFA57B"
              textAlign="center"
              display="block"
            >
              BRANCH 1
            </Typography>
            <Typography
              variant="ptSerif"
              textAlign="center"
              fontSize={{ md: 20, xs: 18 }}
              color="#f9f9f9"
              fontWeight={700}
              sx={{ marginBottom: 2 }}
              display="block"
            >
              Plot no. 1 07, door no. 1 ,<br />
              3rd cross street, padmavathy Nagar extension, <br />
              Madambakkam, Chennai- 600126
            </Typography>
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 30, xs: 24 }}
              color="#BFA57B"
              textAlign="center"
              display="block"
            >
              Tuesday & Thursday <br></br>
              5pm - 8pm
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* B R A N C H  2 */}
      <Box bgcolor="#A77523" textAlign="center" p={isSmallScreen?2:10}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 48, xs: 30 }}
              color="black"
              textAlign="center"
              display="block"
            >
              BRANCH 2
            </Typography>
            <Typography
              variant="ptSerif"
              textAlign="center"
              fontSize={{ md: 20, xs: 18 }}
              color="#D9D9D9"
              sx={{ marginBottom: 2 }}
              fontWeight={700}
              display="block"
            >
              RajParis crystal spring apartment,<br />
              Mambakkam main road , Chithalapakkam, <br />
              Madambakkam, Chennai- 600126
            </Typography>
            <Typography
              variant="bebasNeue"
              fontSize={{ md: 30, xs: 24 }}
              color="black"
              textAlign="center"
              display="block"
            >
              Tuesday & Thursday <br></br>
              5pm - 8pm
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ m: 0 }} textAlign="left">
          <iframe title="Branch 2" width="100%" height="400px" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.041769896624!2d80.14804099999999!3d12.905035699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f0044b7dc79%3A0xaaa5a77278f3299!2sSri%20Megala%20Kalaikudam!5e0!3m2!1sen!2sin!4v1719243476228!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
