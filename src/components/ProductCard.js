import * as React from "react";
import CardContent from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useGetProductbyCategoryQuery } from "src/features/themeData/themeDataApi";
import TakaSign from "/public/images/taka.svg";
import Image from "next/image";

export default function ProductCard() {
  const [keyCat, setKeyCat] = React.useState("Story");
  const { data: products } = useGetProductbyCategoryQuery();
  console.log("products", products);
  const handleClick = (keyword) => setKeyCat(keyword);
  return (
    <>
      {products?.category?.map((category) => (
        <Grid
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={category?.id}
        >
          <Button
            sx={{ borderRadius: "0px" }}
            variant={keyCat ? "contained" : "outlined"}
            size="small"
            onClick={() => handleClick(category?.keyword)}
          >
            {category?.keyword}
          </Button>
        </Grid>
      ))}
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 50px",
        }}
      >
        {products?.data?.map((pro) => (
          <Card sx={{ borderRadius: "10px", textAlign: "center", padding: "20px" }} key={pro?.id}>
            <CardMedia
              component="img"
              sx={{ width: "200px", height: "300px" }}
              image={pro?.thumbnail?.src}
              alt={pro?.thumbnail?.alt}
            />
            <CardContent sx={{ margin: "10px" }}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Typography component="div">{pro?.name}</Typography>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image height={20} width={30} src={TakaSign} />
                {pro?.price?.base_sale}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
}
