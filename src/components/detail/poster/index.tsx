"use client";

import Image from "next/image";
import {FC} from "react";

const Poster: FC<Pick<MovieDetail, "title" | "backdrop_path">> = ({backdrop_path, title}) => {
    return (
        <Image
            alt={title}
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            width={window.screen.availWidth - 15}
            height={window.screen.availHeight}
            style={{position: "fixed"}}
        />
    );
};

export default Poster;
