import {SoftBox} from "app/components/shared/soft_box.ts";
import {headerStyles} from "../styles";
import {FC} from "react";
import {SoftTypography} from "app/components/shared/soft_typography";
import {SoftButton} from "app/components/shared/soft_button";
import {Divider} from "@mui/material";
import {IconContainer, SoftRating} from "app/components/shared/soft_rating";
import FavoriteButton from "./favorite_button";

export const HeaderDetail: FC<
    Pick<MovieDetail, "title" | "homepage" | "release_date" | "vote_average" | "vote_count" | "id">
> = ({title, homepage, release_date, vote_average, vote_count, id}) => {
    return (
        <SoftBox sx={headerStyles()}>
            <SoftBox display="flex" alignItems="center">
                <SoftTypography variant="h1" fontWeight="bold" textGradient>
                    {title}
                </SoftTypography>
                <SoftBox ml={2} display={{xs: "none", md: "block"}}>
                    <a target="_blank" href={homepage}>
                        <SoftButton size="large" variant="gradient" color="dark">
                            ir a la pagina principal
                        </SoftButton>
                    </a>
                </SoftBox>
            </SoftBox>
            <SoftTypography variant="subtitle1">{release_date}</SoftTypography>
            <SoftBox mt={2} display={{xs: "block", md: "none"}}>
                <a target="_blank" href={homepage}>
                    <SoftButton size="large" variant="gradient" color="dark">
                        ir a la pagina principal
                    </SoftButton>
                </a>
            </SoftBox>
            <SoftBox mt={2} display="flex" alignItems="center">
                <FavoriteButton id={id} />
                <Divider orientation="vertical" sx={{mx: 2}} />
                <SoftBox display="flex" alignItems="center" flexWrap="wrap">
                    <SoftRating
                        name="highlight-selected-only"
                        defaultValue={parseInt(`${Math.round(vote_average) / 2}`)}
                        IconContainerComponent={IconContainer}
                        highlightSelectedOnly
                        readOnly
                        sx={{mr: 2}}
                    />
                    <SoftTypography variant="body1">
                        <strong>{vote_count}</strong> Votos
                    </SoftTypography>
                </SoftBox>
            </SoftBox>
        </SoftBox>
    );
};
