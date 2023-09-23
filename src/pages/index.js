import Head from "next/head";
import { Box, Button, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/Home/layout";
import Category from "src/components/category/Category";
import ProductCard from "src/components/ProductCard";
import NewArrival from "src/components/new-arrivals/NewArrivals";
import TagSection from "src/components/tag-section/TagSection";
import { useRef, useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useGetThemeInfoMutation } from "src/features/themeData/themeDataApi";
import { useGetProductbyCategoryQuery } from "src/features/themeData/themeDataApi";

const Page = () => {
  const [getThemeData, { data: themeData }] = useGetThemeInfoMutation();
  const { data: products } = useGetProductbyCategoryQuery();
  const ref = useRef();
  const { events } = useDraggable(ref);

  useEffect(() => {
    getThemeData();
  }, [getThemeData]);

  const sliders = themeData?.data?.theme_info?.slider_g5BCN7?.list;
  const banners = themeData?.data?.theme_info?.image_osrc9o;
  const categoryData = themeData?.data?.theme_info?.category_1JXLtF?.list;
  const newArrivalProducts = products?.data?.filter((product) =>
    product.tags.includes("NEW ARRIVALS")
  );
  console.log("From Index", themeData);
  console.log("products", products);
  console.log("newArrivals", newArrivalProducts);

  return (
    <DashboardLayout>
      <Head>
        <title>Home | MoMagic</title>
      </Head>
      <Grid>
        {sliders?.map((banner, i) => (
          <Grid key={i}>
            <img height="5%" width="100%" src={banner?.banner_url || "images/booksBanner1.jpeg"} />
          </Grid>
        ))}
      </Grid>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Grid sx={{ display: "flex" }}>
          <Category categoryData={categoryData} />
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Grid>
            <Typography variant="h3">Special Product</Typography>
            <Grid
              sx={{ width: "100px", height: "5px", background: "red", margin: "10px 90px" }}
            ></Grid>
          </Grid>
        </Grid>
        <Grid>
          <ProductCard products={products} />
        </Grid>
        <Grid>
          <Grid>
            <img height="5%" width="100%" src={banners?.url || "images/booksBanner1.jpeg"} />
          </Grid>
        </Grid>
        <Grid container sx={{ display: "flex"}}>
          <Grid>
            <Grid
              sx={{
                display: "flex",
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
              ref={ref}
              {...events}
            >
              <NewArrival newArrival={newArrivalProducts} />
            </Grid>
          </Grid>
          <Grid>
            <TagSection />
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};
export default Page;
