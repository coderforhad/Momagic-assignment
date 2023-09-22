import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/Home/layout";
import Category from "src/components/category/Category";
import ProductCard from "src/components/ProductCard";

const Page = () => {

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
            <Typography variant="h1" >Special Product</Typography>
            <Grid sx={{ width: "400px", height: "5px", background: "red", margin: "10px"}}></Grid>
          </Grid>
        </Grid>
        <Grid sx={{ margin: "10px" }}>
          <ProductCard />
        </Grid>
      </Box>
    </DashboardLayout>
  )
};
export default Page;
