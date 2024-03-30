"use client";

import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {SoftButton} from "app/components/shared/soft_button";
import {SoftTypography} from "app/components/shared/soft_typography";
import Image from "next/legacy/image";
import Link from "next/link";
import {FC} from "react";

export const CardMovie: FC<Movie> = ({title, release_date, backdrop_path, overview, id}) => {
    return (
        <Card
            sx={({borders}) => ({
                maxWidth: 400,
                borderRadius: borders.borderRadius.md
            })}
            variant="outlined"
        >
            <CardHeader
                titleTypographyProps={{
                    variant: "subtitle2"
                }}
                subheaderTypographyProps={{
                    variant: "caption"
                }}
                title={`${title.substring(0, 43)}${title.length > 43 ? "..." : ""}`}
                subheader={release_date}
            />
            <Image
                height={200}
                width={400}
                src={
                    backdrop_path
                        ? `https://image.tmdb.org/t/p/w400/${backdrop_path}`
                        : "https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png"
                }
                alt={title}
                priority
            />
            <CardContent>
                <SoftTypography variant="body2" color="text.secondary">
                    {overview.substring(0, 50)}
                    {overview.length > 50 ? "..." : ""}
                </SoftTypography>
            </CardContent>
            <CardActions disableSpacing>
                <SoftButton
                    component={Link}
                    href={`/peliculas/${title}?id=${id}`}
                    variant="gradient"
                    color="dark"
                    fullWidth
                >
                    saber mas
                </SoftButton>
            </CardActions>
        </Card>
    );
};
