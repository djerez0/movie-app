"use client";
import {forwardRef} from "react";
import {ButtonProps} from "@mui/material";

import SoftButtonRoot from "./SoftButtonRoot";

export const SoftButton = forwardRef<
    HTMLButtonElement,
    SoftButtonProps & Omit<ButtonProps, "color" | "variant">
>(({color, variant, size, circular, iconOnly, children, ...rest}, ref) => (
    <SoftButtonRoot
        {...rest}
        ref={ref}
        color="primary"
        variant={variant === "gradient" ? "contained" : variant}
        size={size}
        ownerState={{color, variant, size, circular, iconOnly}}
    >
        {children}
    </SoftButtonRoot>
));

SoftButton.displayName = "TdcButton";

SoftButton.defaultProps = {
    size: "medium",
    variant: "contained",
    color: "primary",
    circular: false,
    iconOnly: false
};
