import "./App.css";
import TourCard from "./component/card/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchAppBar from "./component/appbar/SearchAppBar";
import cities from "./data.json";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      <SearchAppBar></SearchAppBar>
      <Container sx={{ maxWidth: 900, marginY: 5 }}>
        {cities.map((city) => {
          return (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                sx={{ display: "block" }}
                marginBottom={3}
              >
                Top {city.name} Tours
              </Typography>

              <Grid container spacing={2}>
                {city.tours.map((tour, index) => {
                  return (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                      <TourCard tour={tour} />
                    </Grid>
                  );
                })}
              </Grid>
            </>
          );
        })}
      </Container>
    </>
  );
}

export default App;
