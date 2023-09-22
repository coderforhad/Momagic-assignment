import Head from "next/head";
import { Box, Button, Unstable_Grid2 as Grid, Typography, Divider } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/Home/layout";
import Category from "src/components/category/Category";
import ProductCard from "src/components/ProductCard";
import NewArrival from "src/components/new-arrivals/NewArrivals";
import TagSection from "src/components/tag-section/TagSection";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const Page = () => {

  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <DashboardLayout>
      <Head>
        <title>Home | MoMagic</title>
      </Head>
      <img src="images/booksBanner1.jpeg" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 2,
        }}
      >
        <Grid sx={{ margin: "10px" }}>
          <Category />
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Grid>
            <Typography variant="h3" >Special Product</Typography>
            <Grid sx={{ width: "100px", height: "5px", background: "red", margin: "10px 90px" }}></Grid>
          </Grid>
        </Grid>
        <Grid sx={{ margin: "10px" }}>
          <Grid sx={{ display: "flex", gap: "10px", margin: "10px 0px", alignItems: "center", justifyContent: "center" }}>
            <Button sx={{ borderRadius: "0px" }} variant="outlined" size="small">Story</Button>
            <Button sx={{ borderRadius: "0px" }} variant="contained" size="small">Academic</Button>
          </Grid>
          <Grid>
            <ProductCard />
          </Grid>
          <Grid sx={{ display: "flex", gap: "20px", marginTop: "50px" }}>
            <Grid sx={{ width: "20%" }}>
              <Grid sx={{ display: "flex", alignItems: "center" }}>
                <Button sx={{ borderRadius: "0px" }} variant="outlined" size="small">New Arrival</Button>
              </Grid>
              <Grid
                sx={{
                  display: "flex", overflowY: "scroll", width: "75%", height: "530px", margin: "10px", "::-webkit-scrollbar": {
                    display: "none", 
                  }, border:"1px solid gray"
                }}
                ref={ref}
                {...events}
              >
                <NewArrival />
                <NewArrival />
              </Grid>
            </Grid >
            <Grid sx={{ width: "70%" }}>
              <Grid sx={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "center" }}>
                <Button sx={{ borderRadius: "0px" }} variant="outlined" size="small">Story</Button>
                <Button sx={{ borderRadius: "0px" }} variant="contained" size="small">Academic</Button>
              </Grid>
              <TagSection />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  )
};
export default Page;
