import {Theme} from "@mui/material/styles";

export const navbar = (theme: Theme, ownerState: NavbarOwnerStyles) => {
    const {palette, boxShadows, functions, transitions, breakpoints, borders} = theme;
    const {transparentNavbar, absolute, light} = ownerState;

    const {dark, white, text, transparent} = palette;
    const {navbarBoxShadow} = boxShadows;
    const {rgba, pxToRem} = functions;
    const {borderRadius} = borders;

    return {
        mx: absolute ? 2 : 5,
        boxShadow: transparentNavbar ? "none" : navbarBoxShadow,
        backdropFilter: transparentNavbar ? "none" : `saturate(200%) blur(${pxToRem(30)})`,
        backgroundColor: transparentNavbar
            ? `${transparent.main} !important`
            : rgba(white.main, 0.8),

        color: () => {
            let color;

            if (light) {
                color = white.main;
            } else if (transparentNavbar) {
                color = text.main;
            } else {
                color = dark.main;
            }

            return color;
        },
        top: absolute ? 30 : pxToRem(12),
        minHeight: pxToRem(75),
        display: "grid",
        alignItems: "center",
        borderRadius: borderRadius.xl,
        paddingTop: pxToRem(8),
        paddingBottom: pxToRem(8),
        paddingRight: absolute ? pxToRem(8) : 0,
        paddingLeft: absolute ? pxToRem(16) : 0,
        width: "auto",
        left: 1,
        right: 1,

        "& > *": {
            transition: transitions.create("all", {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.standard
            })
        },

        "& .MuiToolbar-root": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            [breakpoints.up("sm")]: {
                minHeight: "auto",
                padding: `${pxToRem(4)} ${pxToRem(16)}`
            }
        }
    };
};

export const navbarContainer = ({breakpoints}: Theme) => ({
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    pt: 0.5,
    pb: 0.5,

    [breakpoints.up("md")]: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: "0",
        paddingBottom: "0"
    }
});

export const navbarRow = ({breakpoints}: Theme, {isMini}: Pick<NavbarProps, "isMini">) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    [breakpoints.up("md")]: {
        justifyContent: isMini ? "space-between" : "stretch",
        width: isMini ? "100%" : "max-content"
    },

    [breakpoints.up("xl")]: {
        justifyContent: "stretch !important",
        width: "max-content !important"
    }
});

export const navbarIconButton = ({typography: {size}, breakpoints}: Theme) => ({
    px: 0.75,
    borderRadius: 1,

    "& .material-icons, .material-icons-round": {
        fontSize: `${size.md} !important`
    },

    "& .MuiTypography-root": {
        display: "none",

        [breakpoints.up("sm")]: {
            display: "inline-block",
            lineHeight: 1.2,
            ml: 0.5
        }
    }
});
