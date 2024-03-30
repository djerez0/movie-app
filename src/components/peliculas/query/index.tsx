"use client";
import {Grid, IconButton, Pagination, PaginationItem} from "@mui/material";
import {SoftInput} from "app/components/shared/soft_input";
import {IconClearFormatting, IconSearch} from "@tabler/icons-react";
import Link from "next/link";
import {ChangeEvent, FC, useState} from "react";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {useRouter} from "next/navigation";

export const Query: FC<{page: string; count: number; initialQuery: string}> = ({
    page,
    count,
    initialQuery = ""
}) => {
    const [query, setQuery] = useState(initialQuery);
    const [timer, setTimer] = useState<NodeJS.Timeout | undefined>();
    const navigation = useRouter();

    const inputChanged = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuery(e.target.value);

        clearTimeout(timer);

        const newTimer = setTimeout(() => {
            navigation.push(`/peliculas?page=1&query=${e.target.value}`);
        }, 500);

        setTimer(newTimer);
    };

    return (
        <>
            <Grid item xs={12} md={6} display="flex" alignItems="center">
                <SoftInput
                    value={query}
                    onChange={inputChanged}
                    placeholder="Busca tu pelicula"
                    icon={{component: <IconSearch />, direction: "left"}}
                />
                <IconButton
                    LinkComponent={Link}
                    href="/peliculas?page=1"
                    onClick={() => setQuery("")}
                    sx={{ml: 2}}
                    color="info"
                >
                    <IconClearFormatting />
                </IconButton>
            </Grid>
            <Grid item xs={12} md={6} display="flex" justifyContent="end">
                <Pagination
                    page={parseInt(page, 10)}
                    count={count > 500 ? 500 : count}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{previous: ArrowForward, next: ArrowBack}}
                            component={Link}
                            href={`/peliculas?${item.page === 1 ? "" : `page=${item.page}`}${query ? `&query=${query}` : ""}`}
                            {...item}
                        />
                    )}
                    variant="outlined"
                />
            </Grid>
        </>
    );
};
