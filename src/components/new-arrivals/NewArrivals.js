import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Grid, Button } from "@mui/material";
import TakaSign from "/public/images/taka.svg";
import Image from "next/image";

export default function NewArrival({ newArrival }) {
  return (
    <Box>
      <Grid sx={{ display: "flex", alignItems: "center" }}>
        <Button sx={{ borderRadius: "0px" }} size="large">
          New Arrival
        </Button>
      </Grid>
      {newArrival?.map((newArr) => (
        <Card sx={{ borderRadius: "0px", py: 1 }} key={newArr?.id}>
          <div style={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: 100, height: "160px" }}
              image={newArr?.gallery.length > 0 ? newArr?.gallery?.[1]?.src : newArr?.thumbnail.src}
              alt={newArr?.gallery?.[0]?.alt}
            />
            <CardContent>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Typography component="div">{newArr?.name}</Typography>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image height={20} width={30} src={TakaSign} alt="moneySign" />
                {newArr?.price?.base_sale}
              </Typography>
            </CardContent>
          </div>
        </Card>
      ))}
    </Box>
  );
}
