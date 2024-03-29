import {Divider, IconButton, Tooltip} from "@mui/material";
import {IconBuildingBank, IconBusinessplan, IconHeart} from "@tabler/icons-react";
import {getDetail} from "app/app/utils";
import StatisticsCard from "app/components/detail/card";
import {SoftBox} from "app/components/shared/soft_box.ts";
import {SoftButton} from "app/components/shared/soft_button";
import {IconContainer, SoftRating} from "app/components/shared/soft_rating";
import {SoftTypography} from "app/components/shared/soft_typography";
import colors from "app/theme/base/palette";

export default async function Detail(props: DetailProps) {
    const {id} = props.searchParams;
    const data = await getDetail(id);

    return (
        <SoftBox>
            <SoftBox
                sx={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${data.backdrop_path}")`,
                    backgroundPosition: "center top",
                    backgroundSize: "cover",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    height: "100%",
                    width: "100%",
                    zIndex: 0
                }}
            />
            <SoftBox
                sx={{
                    position: "relative",
                    background: "linear-gradient(0deg,#ffffff,transparent 100%)",
                    mt: 40,
                    height: 500,
                    zIndex: 1,
                    display: "flex",
                    justifyContent: "end",
                    flexDirection: "column",
                    pb: 5,
                    px: 10
                }}
            >
                <SoftBox display="flex" alignItems="center">
                    <SoftTypography variant="h1" fontWeight="bold" textGradient>
                        {data.title}
                    </SoftTypography>
                    <SoftBox ml={2}>
                        <a target="_blank" href={data.homepage}>
                            <SoftButton size="large" variant="gradient" color="dark">
                                ir a la pagina principal
                            </SoftButton>
                        </a>
                    </SoftBox>
                </SoftBox>
                <SoftTypography variant="subtitle1">{data.release_date}</SoftTypography>
                <SoftBox mt={2} display="flex" alignItems="center">
                    <Tooltip title="Añadir a favoritos">
                        <IconButton color="error">
                            <IconHeart size={30} color={colors.error.main} />
                        </IconButton>
                    </Tooltip>
                    <Divider orientation="vertical" sx={{mx: 2}} />
                    <SoftBox display="flex" alignItems="center">
                        <SoftRating
                            name="highlight-selected-only"
                            defaultValue={parseInt(`${Math.round(data.vote_average) / 2}`)}
                            IconContainerComponent={IconContainer}
                            highlightSelectedOnly
                            readOnly
                        />
                        <SoftTypography variant="body1" ml={2}>
                            <strong>{data.vote_count}</strong> Votos
                        </SoftTypography>
                    </SoftBox>
                </SoftBox>
            </SoftBox>
            <SoftBox
                sx={{
                    position: "relative",
                    zIndex: 1,
                    px: 10,
                    bgcolor: "#fff",
                    pb: 5
                }}
            >
                <SoftBox display="flex" alignItems="center" justifyContent="space-between">
                    <SoftBox>
                        <SoftBox display="flex" alignItems="center">
                            <SoftTypography variant="h6" fontWeight="bold">
                                idioma original:
                            </SoftTypography>
                            <SoftTypography variant="h6" ml={1} lineHeight={0}>
                                {data.original_language}
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex" alignItems="center" mt={1}>
                            <SoftTypography variant="h6" fontWeight="bold">
                                Generos:
                            </SoftTypography>
                            <SoftTypography variant="h6" ml={1} lineHeight={0}>
                                {data.genres.map((g) => g.name).join(", ")}
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex" alignItems="center" mt={1}>
                            <SoftTypography variant="h6" fontWeight="bold">
                                Países de producción:
                            </SoftTypography>
                            <SoftTypography variant="h6" ml={1} lineHeight={0}>
                                {data.production_countries.map((pc) => pc.name).join(", ")}
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox display="flex" alignItems="center" mt={1}>
                            <SoftTypography variant="h6" fontWeight="bold">
                                Compañías de producción:
                            </SoftTypography>
                            <SoftTypography variant="h6" ml={1} lineHeight={0}>
                                {data.production_companies.map((pc) => pc.name).join(", ")}
                            </SoftTypography>
                        </SoftBox>
                    </SoftBox>
                    <SoftBox display="flex">
                        <SoftBox width={300}>
                            <StatisticsCard
                                title={{text: "Presupuesto", fontWeight: "bold"}}
                                count={data.budget
                                    .toLocaleString("fullwide", {
                                        maximumFractionDigits: 2,
                                        style: "currency",
                                        currency: "USD",
                                        useGrouping: true
                                    })
                                    .replace("US", "")}
                                percentage={{color: "success", text: ""}}
                                icon={{color: "info", component: <IconBuildingBank size={22} />}}
                            />
                        </SoftBox>
                        <SoftBox width={300} ml={3}>
                            <StatisticsCard
                                title={{text: "ganancia", fontWeight: "bold"}}
                                count={data.revenue
                                    .toLocaleString("fullwide", {
                                        maximumFractionDigits: 2,
                                        style: "currency",
                                        currency: "USD",
                                        useGrouping: true
                                    })
                                    .replace("US", "")}
                                percentage={{color: "success", text: ""}}
                                icon={{color: "info", component: <IconBusinessplan size={22} />}}
                            />
                        </SoftBox>
                    </SoftBox>
                </SoftBox>
                <Divider variant="middle" sx={{mt: 3}} />
                <SoftTypography mt={3} variant="body1">
                    {data.overview}
                </SoftTypography>
            </SoftBox>
        </SoftBox>
    );
}
