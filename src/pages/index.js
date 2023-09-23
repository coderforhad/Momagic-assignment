import Head from "next/head";
import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/Home/layout";
import Category from "src/components/category/Category";
import ProductCard from "src/components/ProductCard";
import NewArrival from "src/components/new-arrivals/NewArrivals";
import TagSection from "src/components/tag-section/TagSection";
import { useRef, useEffect } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { useGetThemeInfoMutation } from "src/features/themeData/themeDataApi";
import {
  useGetProductbyCategoryQuery,
  getProductbyCategory,
} from "src/features/themeData/themeDataApi";
import { useGetAccessTokenMutation } from "src/features/auth/authApi";
import { wrapper } from "src/store/store";

const Page = ({ output }) => {
  const ref = useRef();
  const { events } = useDraggable(ref);
  const [getAccessToken] = useGetAccessTokenMutation();
  const [getThemeData, { data: themeData }] = useGetThemeInfoMutation();
  const { data: products } = useGetProductbyCategoryQuery();

  //Calling useEffect Hooks
  useEffect(() => {
    getAccessToken();
  }, []);

  useEffect(() => {
    getThemeData();
  }, [getThemeData]);

  const sliders = themeData?.data?.theme_info?.slider_g5BCN7?.list;
  const banners = themeData?.data?.theme_info?.image_osrc9o;
  const categoryData = themeData?.data?.theme_info?.category_1JXLtF?.list;
  const newArrivalProducts = products?.data?.filter((product) =>
    product.tags.includes("NEW ARRIVALS")
  );

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
        <Grid sx={{ display: "flex", p: 3 }}>
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
        <Grid container sx={{ display: "flex" }}>
          <Grid>
            <Grid
              sx={{
                display: "flex",
                "::-webkit-scrollbar": {
                  display: "none",
                },
                p: 3,
              }}
              ref={ref}
              {...events}
            >
              <NewArrival newArrival={newArrivalProducts} />
            </Grid>
          </Grid>
          <Grid sx={{ py: 4 }}>
            <TagSection tagData={products?.data} />
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};
export default Page;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const output = await store.dispatch(getProductbyCategory.initiate(null));
  // const {
  //   results: [{ name: initialPokemon }],
  // } = themeData;

  console.log("State on server", output);

  return { props: { } };
});
