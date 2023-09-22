import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import CardContent from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function ProductCard() {
    return (
        <>
            <Card sx={{ borderRadius: "0px" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200, height: "300px" }}
                    image="https://source.unsplash.com/random/"
                    alt="Live from space album cover"
                />
                <CardContent sx={{ margin: "10px" }}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <Typography component="div">
                        Wrong Place, Wrong Time
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
