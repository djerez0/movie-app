"use client";

import {SoftBox} from "app/components/shared/soft_box.ts";
import {ImageLoaderProps} from "next/image";
import Image from "next/legacy/image";
import {FC} from "react";

const imageLoader = ({src, width, quality}: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

const Poster: FC<Pick<MovieDetail, "title" | "backdrop_path">> = ({backdrop_path, title}) => {
    return (
        <SoftBox top={0} left={0} position="fixed" height="100%" width="100%">
            <Image
                alt={title}
                src={
                    backdrop_path
                        ? `https://image.tmdb.org/t/p/w400/${backdrop_path}`
                        : "https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png"
                }
                layout="fill"
                objectFit="cover"
                priority
                loader={imageLoader}
            />
        </SoftBox>
    );
};

export default Poster;
