import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, OutlinedInput, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useRouter } from "next/router";

export default function Footer({ footerData }) {
  console.log("footerData", footerData); //footerData?.body?.column1?.list?.text_oaT6SY?.content
  const content = footerData?.footer?.body?.column1?.list?.text_oaT6SY?.content;
  const socials = footerData?.footer?.body?.column1?.list?.social_Onen8u?.list;
  const company = footerData?.footer?.body?.column4?.list?.menubar_87srO8?.list;
  const locations = footerData?.locations;
  const Router = useRouter();

  return (
    <Box
      component="footer"
      sx={{
        p: 6,
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 2 }}>
            {content?.slice(3, -4)}
          </Typography>
          {/* {socials?.map(social=> ())} */}
          <Grid sx={{ cursor: "pointer", display: "flex" }} spacing={1}>
            <IconButton aria-label="Example">
              <FacebookIcon sx={{ fontSize: 50 }} color="primary" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid>
            <Typography
              sx={{
                fontSize: "36px",
                textTransform: "uppercase",
                fontWeight: "700",
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}
              color="text.primary"
              gutterBottom
            >
              KNOW IT ALL FIRST!
            </Typography>
            <OutlinedInput
              placeholder="Please enter email"
              sx={{ borderRadius: "0px", width: "90%" }}
            />
          </Grid>
          <Button sx={{ margin: "20px 0px", borderRadius: "0px" }} variant="contained">
            SUBSCRIBE
          </Button>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Contact Us
          </Typography>
          {locations?.map((location) => (
            <>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
              >
                <LocationOnIcon />
                {location?.address}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
              >
                <CallIcon />
                {location?.mobile}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
              >
                <EmailIcon />
                {location?.email}
              </Typography>
            </>
          ))}
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            COMPANY
          </Typography>
          {company?.map((info) => (
            <Grid key={info?.id}>
              <Button onClick={() => Router.push(info?.path)}>{info?.text}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
