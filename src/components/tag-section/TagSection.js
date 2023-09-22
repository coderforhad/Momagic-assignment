import * as React from 'react';
import CardContent from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function TagSection() {
    return (
        <>
            <Card sx={{ borderRadius: "0px", border: "2px solid red", margin: "12px",}}>
                <CardMedia
                    component="img"
                    sx={{ width: 150, height: "200px" }}
                    image="https://source.unsplash.com/random/"
                    alt="Live from space album cover"
                />
                <CardContent sx={{ margin: "10px" }}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    <Typography sx={{ fontSize: "16px" }} component="div">
                        Wrong Place, Wrong Time
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
