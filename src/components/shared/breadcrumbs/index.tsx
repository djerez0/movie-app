import Link from "next/link.js";
import {SoftBox} from "../soft_box.ts";
import {Breadcrumbs as MuiBreadcrumbs} from "@mui/material";
import {SoftTypography} from "../soft_typography";
import {FC} from "react";

export const Breadcrumbs: FC<BreadcrumbsProps> = ({icon, title, route, light = false}) => {
    const routes = route.slice(0, -1);

    return (
        <SoftBox mr={{xs: 0, xl: 8}}>
            <MuiBreadcrumbs
                sx={{
                    "& .MuiBreadcrumbs-separator": {
                        color: ({palette: {white, grey}}) => (light ? white.main : grey[600])
                    }
                }}
            >
                <Link href="/">
                    <SoftTypography
                        component="span"
                        variant="body2"
                        color={light ? "white" : "dark"}
                        opacity={light ? 0.8 : 0.5}
                        sx={{lineHeight: 0}}
                    >
                        {icon}
                    </SoftTypography>
                </Link>
                {routes.map((el) => (
                    <Link href={`/${el}`} key={el}>
                        <SoftTypography
                            component="span"
                            variant="button"
                            fontWeight="regular"
                            textTransform="capitalize"
                            color={light ? "white" : "dark"}
                            opacity={light ? 0.8 : 0.5}
                            sx={{lineHeight: 0}}
                        >
                            {decodeURIComponent(el)}
                        </SoftTypography>
                    </Link>
                ))}
                <SoftTypography
                    variant="button"
                    fontWeight="regular"
                    textTransform="capitalize"
                    color={light ? "white" : "dark"}
                    sx={{lineHeight: 0}}
                >
                    {decodeURIComponent(title).replace("-", " ")}
                </SoftTypography>
            </MuiBreadcrumbs>
            <SoftTypography
                fontWeight="bold"
                textTransform="capitalize"
                variant="h6"
                color={light ? "white" : "dark"}
                noWrap
            >
                {decodeURIComponent(title).replace("-", " ")}
            </SoftTypography>
        </SoftBox>
    );
};
