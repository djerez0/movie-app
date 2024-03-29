"use client";

import {AppBar, IconButton, Link, Toolbar} from "@mui/material";
import {FC, useEffect, useState} from "react";
import {navbar, navbarContainer, navbarIconButton, navbarRow} from "./styles";
import {SoftBox} from "../soft_box.ts";
import {Breadcrumbs} from "../breadcrumbs";
import {usePathname} from "next/navigation";
import {IconBrandGithub, IconHeartFilled, IconHome2} from "@tabler/icons-react";
import {SoftTypography} from "../soft_typography";
import {setTransparentNavbar, useSoftUIController} from "app/context";

export const Navbar: FC<NavbarProps> = ({light, isMini}) => {
    const route = usePathname().split("/").slice(1);
    const [controller, dispatch] = useSoftUIController();
    const {transparentNavbar, fixedNavbar, absoluteNavbar: absolute} = controller;
    const [navbarType, setNavbarType] = useState<"sticky" | "static">("sticky");
    const pathname = usePathname();

    useEffect(() => {
        dispatch({payload: pathname.split("/").length > 2, type: "ABSOLUTE_NAVBAR"});
        dispatch({payload: pathname.split("/").length < 2, type: "TRANSPARENT_NAVBAR"});
    }, [pathname, dispatch]);

    useEffect(() => {
        if (fixedNavbar) {
            setNavbarType("sticky");
        } else {
            setNavbarType("static");
        }

        function handleTransparentNavbar() {
            if (absolute) return;
            setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
        }
        window.addEventListener("scroll", handleTransparentNavbar);

        handleTransparentNavbar();
        return () => window.removeEventListener("scroll", handleTransparentNavbar);
    }, [fixedNavbar, dispatch, transparentNavbar, absolute]);

    return (
        <AppBar
            position={absolute ? "absolute" : navbarType}
            color="inherit"
            sx={(theme) => navbar(theme, {absolute, light, transparentNavbar})}
        >
            <Toolbar sx={(theme) => navbarContainer(theme)}>
                <SoftBox
                    color="inherit"
                    mb={{xs: 1, md: 0}}
                    sx={(theme) => navbarRow(theme, {isMini})}
                >
                    <Breadcrumbs
                        icon={<IconHome2 color="black" />}
                        title={route[route.length - 1]}
                        route={route}
                        light={light}
                    />
                </SoftBox>
                <SoftBox sx={(theme) => navbarRow(theme, {isMini})}>
                    <SoftBox color={light ? "white" : "inherit"}>
                        <IconButton size="small" color="error" sx={navbarIconButton}>
                            <IconHeartFilled />
                            <SoftTypography
                                variant="button"
                                fontWeight="medium"
                                color={light ? "white" : "dark"}
                            >
                                Mis Favoritos
                            </SoftTypography>
                        </IconButton>
                        <Link href="/authentication/sign-in/basic">
                            <IconButton sx={navbarIconButton} size="small">
                                <IconBrandGithub />
                                <SoftTypography
                                    variant="button"
                                    fontWeight="medium"
                                    color={light ? "white" : "dark"}
                                >
                                    Source Code
                                </SoftTypography>
                            </IconButton>
                        </Link>
                    </SoftBox>
                </SoftBox>
            </Toolbar>
        </AppBar>
    );
};
