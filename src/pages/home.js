import React from 'react';
import {
  Box,
  Button,
  Typography,
  Stack,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";


const Home = () => {
  return (
    <div>
      <Box>
      <Typography
          variant="junge"
          display="block"
          color="#593C35"
          mb={2}
          fontSize={{ md: 48, xs: 30 }}
        >
          SRI MEGALA KALAIKUDAM
        </Typography>
        <Typography
          variant="bebasNeue"
          display="block"
          color="#593C35"
          mb={2}
          fontSize={{ md: 48, xs: 30 }}
        >
          ADMIN BLOCK, LOYOLA COLLEGE, CHENNAI
        </Typography>
      </Box>
    </div>
  );
}

export default Home;