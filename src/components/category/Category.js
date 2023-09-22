import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ImageButton, ImageSrc, ImageBackdrop, Image, ImageMarked } from "./Style";

export default function Category(props) {
  const { categoryData } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      {categoryData?.map((image) => (
        <ImageButton
          focusRipple
          key={image?.id}
          style={{
            width: "24%",
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.thumb})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image?.name}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
