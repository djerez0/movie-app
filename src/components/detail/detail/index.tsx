import {SoftBox} from "app/components/shared/soft_box.ts";
import {FC} from "react";
import {detailContainerStyles} from "../styles";
import {DetailItem} from "./item";
import StatisticsCard from "../card";
import {IconBuildingBank, IconBusinessplan} from "@tabler/icons-react";
import {Divider, Grid} from "@mui/material";
import {SoftTypography} from "app/components/shared/soft_typography";

const formatCurrency = (currency: number) => {
    return currency
        .toLocaleString("fullwide", {
            maximumFractionDigits: 2,
            style: "currency",
            currency: "USD",
            useGrouping: true
        })
        .replace("US", "");
};

export const DetailComponent: FC<
    Pick<
        MovieDetail,
        | "original_language"
        | "genres"
        | "production_countries"
        | "production_companies"
        | "budget"
        | "revenue"
        | "overview"
    >
> = ({
    original_language,
    genres,
    production_countries,
    production_companies,
    budget,
    revenue,
    overview
}) => {
    /* display="flex" alignItems="center" justifyContent="space-between" */
    return (
        <SoftBox sx={detailContainerStyles()}>
            <Grid container>
                <Grid item lg={6} height="max-content">
                    <DetailItem label="Idioma original" payload={original_language} />
                    <DetailItem
                        label="Generos"
                        payload={genres.map((genre) => genre.name).join(", ")}
                    />
                    <DetailItem
                        label="Países de producción"
                        payload={production_countries
                            .map((productionCountrie) => productionCountrie.name)
                            .join(", ")}
                    />
                    <DetailItem
                        label="Compañías de producción"
                        payload={production_companies
                            .map((productionCompanie) => productionCompanie.name)
                            .join(", ")}
                    />
                </Grid>
                <Grid item lg={6}>
                    <Grid container>
                        <Grid item sm={6} xs={12}>
                            <SoftBox width={300} mt={{xs: 3, sm: 0}} ml={{sm: 3, xs: 0}}>
                                <StatisticsCard
                                    title={{text: "Presupuesto", fontWeight: "bold"}}
                                    count={formatCurrency(budget)}
                                    percentage={{color: "success", text: ""}}
                                    icon={{
                                        color: "info",
                                        component: <IconBuildingBank size={22} />
                                    }}
                                />
                            </SoftBox>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <SoftBox width={300} ml={{sm: 3, xs: 0}} mt={{xs: 2, sm: 0}}>
                                <StatisticsCard
                                    title={{text: "ganancia", fontWeight: "bold"}}
                                    count={formatCurrency(revenue)}
                                    percentage={{color: "success", text: ""}}
                                    icon={{
                                        color: "info",
                                        component: <IconBusinessplan size={22} />
                                    }}
                                />
                            </SoftBox>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant="middle" sx={{mt: 3}} />
            <SoftTypography mt={3} variant="body1">
                {overview}
            </SoftTypography>
        </SoftBox>
    );
};
