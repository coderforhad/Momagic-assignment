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

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? theme.palette.backgroundColor : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 2 }}>
            A bookshop is a specialized retail establishment that primarily sells books, both
            fiction and non-fiction, across various genres and subjects. Often a sanctuary for
            bibliophiles, a bookshop might also offer related items such as magazines, newspapers,
            stationery, and sometimes music or movies.
          </Typography>
          <Grid sx={{ cursor: "pointer", display: "flex" }} spacing={1}>
            <IconButton aria-label="Example">
              <FacebookIcon sx={{ fontSize: 50 }} color="primary" />
            </IconButton>
            <IconButton aria-label="Example">
              <LinkedInIcon sx={{ fontSize: 50 }} color="primary" />
            </IconButton>
            <IconButton aria-label="Example">
              <InstagramIcon sx={{ fontSize: 50, color: "#E1306C" }} />
            </IconButton>
            <IconButton aria-label="Example">
              <YouTubeIcon fontSize="large" sx={{ fontSize: 50, color: "#FF0000" }} />
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
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
          >
            <LocationOnIcon />
            Dhaka, Bangladesh
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
          >
            <CallIcon />
            01700705293
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
          >
            <EmailIcon />
            info@webmanza.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2.5}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            COMPANY
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
          >
            FAQ
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
          >
            Return Policy
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            sx={{ display: "flex", gap: "10px", margin: "10px 0px" }}
          >
            Tearms & Condisions
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
