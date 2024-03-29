import {SoftBox} from "app/components/shared/soft_box.ts";
import {getMovies} from "../utils";
import {Card, CardActions, CardContent, CardHeader, Grid, IconButton} from "@mui/material";
import Image from "next/image";
import {SoftTypography} from "app/components/shared/soft_typography";
import {IconHeart, IconShare} from "@tabler/icons-react";
import {SoftButton} from "app/components/shared/soft_button";
import Link from "next/link";

export const revalidate = 3600;

export default async function Home() {
    const data = await getMovies();

    return (
        <SoftBox my={10} mx={10}>
            <Grid container spacing={3}>
                {data.results.map((movie) => (
                    <Grid key={movie.id} item md={3} display="flex" justifyContent="center">
                        <Card
                            sx={{
                                maxWidth: 400,
                                borderRadius: 3
                            }}
                            elevation={5}
                            variant="outlined"
                        >
                            <CardHeader
                                titleTypographyProps={{
                                    variant: "subtitle2"
                                }}
                                subheaderTypographyProps={{
                                    variant: "caption"
                                }}
                                title={movie.title}
                                subheader={movie.release_date}
                            />
                            <Image
                                height={200}
                                width={400}
                                src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                            <CardContent>
                                <SoftTypography variant="body2" color="text.secondary">
                                    {movie.overview.substring(0, 50)}
                                    {movie.overview.length > 50 ? "..." : ""}
                                </SoftTypography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton color="error" aria-label="add to favorites">
                                    <IconHeart />
                                </IconButton>
                                <IconButton color="info" aria-label="share">
                                    <IconShare />
                                </IconButton>
                                <SoftButton
                                    component={Link}
                                    href={`/peliculas/${movie.title}?id=${movie.id}`}
                                    variant="gradient"
                                    color="dark"
                                    fullWidth
                                    sx={{mx: 2}}
                                >
                                    saber mas
                                </SoftButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </SoftBox>
    );
}
