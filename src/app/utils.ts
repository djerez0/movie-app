import {cache} from "react";

export const getMovies = cache(async (query?: string, page: string = "1") => {
    const movies = await fetch(
        `https://api.themoviedb.org/3/${query ? "search" : "discover"}/movie?query=${query ? encodeURIComponent(query) : ""}&page=${page}&sort_by=popularity.desc&api_key=04b57569b795c5263e2427efa0fb223d`
    );
    const result = await movies.json();
    return result as {result: number; results: Movie[]; total_pages: number};
});

export const getDetail = cache(async (id: string) => {
    const movie = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=04b57569b795c5263e2427efa0fb223d`
    );
    const result = await movie.json();
    return result as MovieDetail;
});

export const getRequestToken = async () => {
    const requestToken = await fetch(
        "https://api.themoviedb.org/3/authentication/token/new?api_key=04b57569b795c5263e2427efa0fb223d"
    );
    const result = await requestToken.json();
    return result as RequestToken;
};

export const getSession = async (request_token: string) => {
    const session = await fetch(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=04b57569b795c5263e2427efa0fb223d&request_token=${request_token}`
    );
    const result = await session.json();
    return result as {
        success: boolean;
        session_id: string;
    };
};

export const addFavorite = async (movie_id: number, isFavorite: boolean, session_id: string) => {
    const url = `https://api.themoviedb.org/3/account/21151245/favorite?api_key=04b57569b795c5263e2427efa0fb223d&session_id=${session_id}`;
    const options = {
        method: "POST",
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({media_type: "movie", media_id: movie_id, favorite: isFavorite})
    };

    const favorite = await fetch(url, options);
    const result = await favorite.json();
    return result;
};

export const isFavorite = async (movieId: number, session_id: string) => {
    const favorite = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/account_states?session_id=${session_id}&api_key=04b57569b795c5263e2427efa0fb223d`
    );
    const result = await favorite.json();
    return result;
};

export const getFavoriteMovies = async (session_id: string, page = "1") => {
    const favoriteMovies = await fetch(
        `https://api.themoviedb.org/3/account/21151245/favorite/movies?page=${page}&api_key=04b57569b795c5263e2427efa0fb223d&session_id=${session_id}`,
        {next: {revalidate: 0}}
    );
    const result = await favoriteMovies.json();
    return result as {result: number; results: Movie[]; total_pages: number};
};
