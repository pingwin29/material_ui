import React from "react";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Rating } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import { AccessAlarm, AccessAlarms } from "@mui/icons-material";
const TourCard = ({ tour }) => {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: { fontSize: 11 },
          },
          {
            props: {
              variant: "body3",
            },
            style: { fontSize: 9 },
          },
        ],
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Paper elevation={1}>
          <img src={tour.image} alt="" srcset="" className="img" />
          <Box sx={{ paddingX: 1 }}>
            <Typography variant="subtitle2" component="h2">
              {tour.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            paddingX={1}
          >
            <AccessAlarms sx={{ width: 12.5 }}></AccessAlarms>
            <Typography variant="body2" component="p">
              {tour.duration} hour
            </Typography>
          </Box>
          <Box
            paddingX={1}
            marginTop={3}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating name="read-only" value={tour.rating} size="small" precision={0.5} readOnly />
            <Typography variant="body2" component="p">
              {tour.rating}
            </Typography>
            <Typography variant="body3" component="p" marginLeft={1.5}>
              ({tour.numberOfReviews} review)
            </Typography>
          </Box>
          <Box paddingX={1}>
            <Typography variant="h6" component="h3" marginTop={0}>
              From C $ {tour.price}
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default TourCard;
