"use client";

import {forwardRef} from "react";
import SoftTypographyRoot from "./SoftTypographyRoot";
import {TypographyProps} from "@mui/material";

export const SoftTypography = forwardRef<
    HTMLParagraphElement,
    SoftTypographyProps & Omit<TypographyProps, "color">
>(
    (
        {color, fontWeight, textTransform, verticalAlign, textGradient, opacity, children, ...rest},
        ref
    ) => (
        <SoftTypographyRoot
            {...rest}
            ref={ref}
            ownerState={{color, textTransform, verticalAlign, fontWeight, opacity, textGradient}}
        >
            {children}
        </SoftTypographyRoot>
    )
);

SoftTypography.defaultProps = {
    color: "dark",
    fontWeight: "regular",
    textTransform: "none",
    verticalAlign: "unset",
    textGradient: false,
    opacity: 1
};

SoftTypography.displayName = "SoftTypography";
