
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";


import { useEffect, useState } from "react";


export default function Category() {
  // const [accessToken, setAccessToken] = useState()
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch("https://api.webmanza.com/auth/v2/get-access-token", {
  //       headers: { "Origin": "bookshop.webmanza.com" },
  //       method: "post"
  //     })
  //     const result = await response.json()
  //     setAccessToken(result.access_token)
  //   }
  //   getData()
  // }, [])
  // console.log(accessToken)
  // useEffect(() => {
  //   const getthemeData = async () => {
  //     const response = await fetch("https://api.webmanza.com/general/v2/store-info", {
  //       headers: {
  //         'Authorization': `Bearer ${accessToken}`,
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         "Origin": "bookshop.webmanza.com"
  //       },
  //     })
  //     const themeData = await response.json()
  //     console.log(themeData)
  //   }
  //   getthemeData()
  // }, [accessToken])

  
  return (
    <Card>
      <Grid sx={{ position: "relative" }}>
        <CardMedia component="img" alt="green iguana" height="350" image="images/story.jpeg" />
      </Grid>
      <Grid sx={{ position: "absolute", transform: "translate(120%, -400%)" }}>
        <Button size="large" sx={{ borderRedius: "0px" }} variant="contained">
          STORY
        </Button>
      </Grid>
    </Card>
  );
}
