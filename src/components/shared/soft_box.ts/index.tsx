"use client";
import {forwardRef} from "react";
import SoftBoxRoot from "./SoftBoxRoot";
import {BoxProps} from "@mui/material";

export const SoftBox = forwardRef<HTMLDivElement, SoftBoxProps & Omit<BoxProps, "color">>(
    ({variant, bgColor, color, opacity, borderRadius, shadow, ...rest}, ref) => (
        <SoftBoxRoot
            {...rest}
            ref={ref}
            ownerState={{variant, bgColor, color, opacity, borderRadius, shadow}}
        />
    )
);

SoftBox.defaultProps = {
    variant: "contained",
    bgColor: "transparent",
    color: "dark",
    opacity: 1,
    borderRadius: "none",
    shadow: "none"
};

SoftBox.displayName = "SoftBox";
