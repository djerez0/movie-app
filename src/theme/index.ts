"use client";
import {createTheme} from "@mui/material/styles";
import breakpoints from "./base/breakpoints";
import colors from "./base/palette";
import {typography} from "./base/typography";
import {boxShadows} from "./base/box_shadows";
import {borders} from "./base/borders";
import boxShadow from "./functions/box_shadow";
import hexToRgb from "./functions/hex_to_rgb";
import pxToRem from "./functions/px_to_rem";
import rgba from "./functions/rgba";
import linearGradient from "./functions/linear_gradient";
import {globals} from "./base/globals";

declare module "@mui/material/styles" {
    interface TypeText extends CustomTypeText {}

    interface PaletteColorOptions extends CustomPaletteColorOptions {}

    interface PaletteOptions extends CustomPaletteOptions {}

    interface Palette extends CustomPaletteOptions {}

    interface TypographyVariantsOptions extends CustomTypographyVariantsOptions {}

    interface TypographyVariants extends CustomTypographyVariantsOptions {}

    interface ThemeOptions extends CustomThemeOptions {}

    interface Theme extends CustomThemeOptions {}
}

export const theme = createTheme({
    direction: "rtl",
    breakpoints: breakpoints,
    palette: colors,
    typography: typography,
    boxShadows: boxShadows,
    borders: borders,
    functions: {
        boxShadow,
        hexToRgb,
        linearGradient,
        pxToRem,
        rgba
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ...globals
            }
        }
    }
});
