import * as React from "react";
import CardContent from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import TakaSign from "/public/images/taka.svg";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";

export default function ProductCard({ products }) {
  console.log("products", products);
  const [keyCat, setKeyCat] = React.useState("Thrillar");
  const handleClick = (keyword) => setKeyCat(keyword);
  const filteredProducts = keyCat
    ? products?.data?.filter((product) => product.categories.includes(keyCat))
    : products?.data;

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
        {[...new Set(products?.data?.flatMap((item) => item?.categories))].map((category, i) => (
          <Button
            key={i}
            sx={{ borderRadius: "0px" }}
            variant={category === keyCat ? "contained" : "outlined"}
            size="small"
            onClick={() => handleClick(category, i)}
          >
            {category}
          </Button>
        ))}
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
              sx={{ width: "200px", height: "300px" }}
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
      <Grid sx={{ float: "right", margin: "20px" }}>
        {/* <Pagination
          count={totalPages}
          page={currentPage}
          onChange={()=>handlePaginationChange(links.page)}
          color="primary"
          size="large"
          style={{ marginTop: "20px" }}
          variant="outlined"
          shape="rounded"
        /> */}
      </Grid>
    </>
  );
}
