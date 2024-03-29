import pxToRem from "../functions/px_to_rem";
import colors from "./palette";

const {dark} = colors;

const baseProperties = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontSizeXXS: pxToRem(10.4),
    fontSizeXS: pxToRem(12),
    fontSizeSM: pxToRem(14),
    fontSizeMD: pxToRem(16),
    fontSizeLG: pxToRem(18),
    fontSizeXL: pxToRem(20)
};

const baseHeadingProperties = {
    fontFamily: baseProperties.fontFamily,
    color: dark.main,
    fontWeight: baseProperties.fontWeightMedium
};

export const typography = {
    fontFamily: baseProperties.fontFamily,
    fontWeightLight: baseProperties.fontWeightLight,
    fontWeightRegular: baseProperties.fontWeightRegular,
    fontWeightMedium: baseProperties.fontWeightMedium,
    fontWeightBold: baseProperties.fontWeightBold,

    h1: {
        fontSize: pxToRem(48),
        lineHeight: 1.25,
        ...baseHeadingProperties
    },

    h2: {
        fontSize: pxToRem(36),
        lineHeight: 1.3,
        ...baseHeadingProperties
    },

    h3: {
        fontSize: pxToRem(30),
        lineHeight: 1.375,
        ...baseHeadingProperties
    },

    h4: {
        fontSize: pxToRem(24),
        lineHeight: 1.375,
        ...baseHeadingProperties
    },

    h5: {
        fontSize: pxToRem(20),
        lineHeight: 1.375,
        ...baseHeadingProperties
    },

    h6: {
        fontSize: pxToRem(16),
        lineHeight: 1.625,
        ...baseHeadingProperties
    },

    subtitle1: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeXL,
        fontWeight: baseProperties.fontWeightRegular,
        lineHeight: 1.625
    },

    subtitle2: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeMD,
        fontWeight: baseProperties.fontWeightMedium,
        lineHeight: 1.6
    },

    body1: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeXL,
        fontWeight: baseProperties.fontWeightRegular,
        lineHeight: 1.625
    },

    body2: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeMD,
        fontWeight: baseProperties.fontWeightRegular,
        lineHeight: 1.6
    },

    button: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeSM,
        fontWeight: baseProperties.fontWeightBold,
        lineHeight: 1.5,
        textTransform: "uppercase" as const
    },

    caption: {
        fontFamily: baseProperties.fontFamily,
        fontSize: baseProperties.fontSizeXS,
        fontWeight: baseProperties.fontWeightRegular,
        lineHeight: 1.25
    },

    overline: {
        fontFamily: baseProperties.fontFamily
    },

    size: {
        xxs: baseProperties.fontSizeXXS,
        xs: baseProperties.fontSizeXS,
        sm: baseProperties.fontSizeSM,
        md: baseProperties.fontSizeMD,
        lg: baseProperties.fontSizeLG,
        xl: baseProperties.fontSizeXL
    },

    lineHeight: {
        sm: 1.25,
        md: 1.5,
        lg: 2
    }
};
