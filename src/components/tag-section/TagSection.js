import * as React from "react";
import CardContent from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Grid, Button } from "@mui/material";
import TakaSign from "/public/images/taka.svg";
import Image from "next/image";

export default function TagSection() {
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button sx={{ borderRadius: "0px" }} variant="outlined" size="small">
          Story
        </Button>
        <Button sx={{ borderRadius: "0px" }} variant="contained" size="small">
          Academic
        </Button>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0px 50px",
        }}
      >
        <Card sx={{ borderRadius: "10px", padding: "20px", margin: "10px" }}>
          <CardMedia
            component="img"
            sx={{ width: 150, height: "200px", textAlign: "center" }}
            image="https://source.unsplash.com/random/"
            alt="Live from space album cover"
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Typography sx={{ fontSize: "14px" }} component="div">
              Wrong Place, Wrong Time
            </Typography>
            <Typography
              component="div"
              sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Image height={20} width={30} src={TakaSign} alt="moneySign" />
              600
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
