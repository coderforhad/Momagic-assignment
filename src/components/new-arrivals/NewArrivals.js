import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function NewArrival() {
    return (
        <Box>
            <Card sx={{ borderRadius: "0px", py: 1 }}>
                <div style={{ display: "flex" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 100, height: "160px" }}
                        image="https://source.unsplash.com/random/"
                        alt="Live from space album cover"
                    />
                    <CardContent>
                        <Rating size='small' name="half-rating" defaultValue={2.5} precision={0.5} />
                        <Typography sx={{ fontSize: "14px" }} component="div">
                            Successful Academic Writing
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <Card sx={{ borderRadius: "0px", py: 1 }}>
                <div style={{ display: "flex" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 100, height: "160px" }}
                        image="https://source.unsplash.com/random/"
                        alt="Live from space album cover"
                    />
                    <CardContent>
                        <Rating size='small' name="half-rating" defaultValue={2.5} precision={0.5} />
                        <Typography sx={{ fontSize: "14px" }} component="div">
                            Successful Academic Writing
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <Card sx={{ borderRadius: "0px", py: 1 }}>
                <div style={{ display: "flex" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 100, height: "160px" }}
                        image="https://source.unsplash.com/random/"
                        alt="Live from space album cover"
                    />
                    <CardContent>
                        <Rating size='small' name="half-rating" defaultValue={2.5} precision={0.5} />
                        <Typography sx={{ fontSize: "14px" }} component="div">
                            Successful Academic Writing
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <Card sx={{ borderRadius: "0px", py: 1 }}>
                <div style={{ display: "flex" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 100, height: "160px" }}
                        image="https://source.unsplash.com/random/"
                        alt="Live from space album cover"
                    />
                    <CardContent>
                        <Rating size='small' name="half-rating" defaultValue={2.5} precision={0.5} />
                        <Typography sx={{ fontSize: "14px" }} component="div">
                            Successful Academic Writing
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <Card sx={{ borderRadius: "0px", py: 1 }}>
                <div style={{ display: "flex" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 100, height: "160px" }}
                        image="https://source.unsplash.com/random/"
                        alt="Live from space album cover"
                    />
                    <CardContent>
                        <Rating size='small' name="half-rating" defaultValue={2.5} precision={0.5} />
                        <Typography sx={{ fontSize: "14px" }} component="div">
                            Successful Academic Writing
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </Box>
    );
}
