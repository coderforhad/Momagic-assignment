import * as React from "react";
import CardContent from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { Grid, Button } from "@mui/material";
import TakaSign from "/public/images/taka.svg";
import Image from "next/image";

export default function TagSection({ tagData }) {
  const [keyCat, setKeyCat] = React.useState("BEST SELLER");
  const handleClick = (keyword) => setKeyCat(keyword);
  const filteredTagData = tagData?.filter((item) => item?.tags.indexOf("NEW ARRIVALS") === -1);
  const filteredProducts = keyCat
    ? filteredTagData?.filter((product) => product?.tags.includes(keyCat)) : filteredTagData;

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[...new Set(filteredTagData?.flatMap((item) => item?.tags))].map((tag, i) => (
          <Button
            key={i}
            sx={{ borderRadius: "0px" }}
            variant={tag === keyCat ? "contained" : "outlined"}
            size="small"
            onClick={() => handleClick(tag, i)}
          >
            {tag}
          </Button>
        ))}
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0px 50px",
        }}
      >
        {filteredProducts?.map((pro) => (
          <Card
            sx={{ borderRadius: "10px", textAlign: "center", padding: "20px", margin: "10px" }}
            key={pro?.id}
          >
            <CardMedia
              component="img"
              sx={{ width: "150px", height: "200px" }}
              image={pro?.gallery.length > 0 ? pro?.gallery?.[0]?.src : pro?.thumbnail.src}
              alt={pro?.thumbnail?.alt}
            />
            <CardContent>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Typography component="div">{pro?.name}</Typography>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image height={20} width={30} src={TakaSign} alt="moneySign" />
                {pro?.price?.base_sale}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
}
