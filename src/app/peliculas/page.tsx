import {SoftBox} from "app/components/shared/soft_box.ts";
import {getMovies} from "../utils";
import {Grid} from "@mui/material";
import {CardMovie} from "app/components/peliculas/card";
import {Query} from "app/components/peliculas/query";

export const revalidate = 3600;

export default async function Home(props: HomeProps) {
    const {page, query} = props.searchParams;
    const data = await getMovies(query, page);

    return (
        <SoftBox my={{xs: 2, sm: 5, md: 10}} mx={{xs: 2, sm: 5, md: 10}}>
            <Grid container spacing={3}>
                <Query page={page || "1"} count={data.total_pages} initialQuery={query || ""} />
                {data.results?.map((movie) => (
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
}
