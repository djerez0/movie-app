import pxToRem from "../functions/px_to_rem";
import colors from "./palette";

const {grey} = colors;

export const borders = {
    borderColor: grey[300],

    borderWidth: {
        0: "0",
        1: pxToRem(1),
        2: pxToRem(2),
        3: pxToRem(3),
        4: pxToRem(4),
        5: pxToRem(5)
    },

    borderRadius: {
        xs: pxToRem(2),
        sm: pxToRem(4),
        md: pxToRem(8),
        lg: pxToRem(12),
        xl: pxToRem(16),
        xxl: pxToRem(24),
        section: pxToRem(160)
    }
};
