import {cache} from "react";

export const getMovies = cache(async () => {
    const movies = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=04b57569b795c5263e2427efa0fb223d"
    );
    const result = await movies.json();
    return result as {result: number; results: Movie[]};
});

export const getDetail = cache(async (id: string) => {
    const movie = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=04b57569b795c5263e2427efa0fb223d`
    );
    const result = await movie.json();
    return result as MovieDetail;
});
