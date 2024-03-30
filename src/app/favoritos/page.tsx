"use client";
import {Grid, Pagination, PaginationItem} from "@mui/material";
import {SoftBox} from "app/components/shared/soft_box.ts";
import {CardMovie} from "app/components/peliculas/card";
import {useEffect, useState} from "react";
import {getFavoriteMovies} from "../utils";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import Link from "next/link";

const Favorites = (props: {searchParams: {page: string; session_id?: string}}) => {
    const {page, session_id} = props.searchParams;
    const [data, setData] = useState<{
        result: number;
        results: Movie[];
        total_pages: number;
    } | null>(null);

    useEffect(() => {
        if (session_id) {
            getFavoriteMovies(session_id, page).then(setData);
        }
    }, [page, session_id]);

    return (
        <SoftBox my={{xs: 2, sm: 5, md: 10}} mx={{xs: 2, sm: 5, md: 10}}>
            <Grid container spacing={3}>
                <Grid item xs={12} display="flex" justifyContent="end">
                    <Pagination
                        page={parseInt(page || "1", 10)}
                        count={
                            data?.total_pages && data?.total_pages > 500
                                ? 500
                                : data?.total_pages || 1
                        }
                        renderItem={(item) => (
                            <PaginationItem
                                slots={{previous: ArrowForward, next: ArrowBack}}
                                component={Link}
                                href={`/favoritos?${item.page === 1 ? "" : `page=${item.page}`}`}
                                {...item}
                            />
                        )}
                        variant="outlined"
                    />
                </Grid>
                {data?.results?.map((movie) => (
                    <Grid
                        key={movie.id}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={2}
                        display="flex"
                        justifyContent="center"
                    >
                        <CardMovie {...movie} />
                    </Grid>
                ))}
            </Grid>
        </SoftBox>
    );
};

export default Favorites;
