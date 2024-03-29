import {forwardRef} from "react";
import {InputProps} from "@mui/material";

import SoftInputRoot from "./SoftInputRoot";
import SoftInputWhithIconRoot from "./SoftInputWhithIconRoot";
import SoftInputIconBoxRoot from "./SoftInputIconBoxRoot";
import SoftInputIconRoot from "./SoftInputIconRoot";

export const SoftInput = forwardRef<HTMLInputElement, SoftInputProps & InputProps>(
    ({size, icon, error, success, disabled, ...rest}, ref) => {
        let template;

        const iconDirection = icon?.direction;

        if (icon?.component && iconDirection === "left") {
            template = (
                <SoftInputWhithIconRoot ref={ref} ownerState={{error, success, disabled}}>
                    <SoftInputIconBoxRoot ownerState={{size}}>
                        <SoftInputIconRoot fontSize="small" ownerState={{size}}>
                            {icon.component}
                        </SoftInputIconRoot>
                    </SoftInputIconBoxRoot>
                    <SoftInputRoot
                        {...rest}
                        ownerState={{size, iconDirection, error, success, disabled}}
                    />
                </SoftInputWhithIconRoot>
            );
        } else if (icon?.component && iconDirection === "right") {
            template = (
                <SoftInputWhithIconRoot ref={ref} ownerState={{error, success, disabled}}>
                    <SoftInputRoot
                        {...rest}
                        ownerState={{size, error, success, iconDirection, disabled}}
                    />
                    <SoftInputIconBoxRoot ownerState={{size}}>
                        <SoftInputIconRoot fontSize="small" ownerState={{size}}>
                            {icon.component}
                        </SoftInputIconRoot>
                    </SoftInputIconBoxRoot>
                </SoftInputWhithIconRoot>
            );
        } else {
            template = (
                <SoftInputRoot {...rest} ref={ref} ownerState={{size, error, success, disabled}} />
            );
        }
        return template;
    }
);

SoftInput.defaultProps = {
    size: "medium",
    icon: {
        component: null,
        direction: "left"
    },
    error: false,
    success: false,
    disabled: false
};

SoftInput.displayName = "SoftInputRoot";
