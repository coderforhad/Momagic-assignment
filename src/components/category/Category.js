import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageButton, ImageSrc, ImageBackdrop, Image, ImageMarked } from './Style';

const images = [
  {
    url: 'https://source.unsplash.com/random/',
    title: 'Breakfast',
  },
  {
    url: 'https://source.unsplash.com/random/',
    title: 'Burgers',
  },
  {
    url: 'https://source.unsplash.com/random/',
    title: 'Camera',
  },
  {
    url: 'https://source.unsplash.com/random/',
    title: 'Camera',
  },
];

export default function Category() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-between" }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: "24%",
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
