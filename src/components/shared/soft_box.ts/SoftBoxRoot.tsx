import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

export default styled(Box)<{ownerState: SoftBoxProps}>(({theme, ownerState}) => {
    const {palette, functions, borders, boxShadows} = theme;
    const {variant, bgColor, color, opacity, borderRadius, shadow} = ownerState;

    const {gradients, grey, white} = palette;
    const {linearGradient} = functions;
    const {borderRadius: radius} = borders;

    const greyColors = {
        "grey-100": grey[100],
        "grey-200": grey[200],
        "grey-300": grey[300],
        "grey-400": grey[400],
        "grey-500": grey[500],
        "grey-600": grey[600],
        "grey-700": grey[700],
        "grey-800": grey[800],
        "grey-900": grey[900]
    };

    const validGradients = [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light"
    ];

    const validColors = [
        "transparent",
        "white",
        "black",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
        "text",
        "grey-100",
        "grey-200",
        "grey-300",
        "grey-400",
        "grey-500",
        "grey-600",
        "grey-700",
        "grey-800",
        "grey-900"
    ];

    const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
    const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

    // background value
    let backgroundValue = "";

    if (variant === "gradient") {
        backgroundValue = validGradients.find((el) => el === bgColor)
            ? linearGradient(
                  gradients[bgColor as keyof typeof gradients].main,
                  gradients[bgColor as keyof typeof gradients].state
              )
            : white.main;
    } else if (validColors.find((el) => el === bgColor)) {
        backgroundValue = palette[bgColor as keyof typeof palette]
            ? (palette[bgColor as keyof typeof palette] as {main: string}).main
            : greyColors[bgColor as keyof typeof greyColors];
    } else {
        backgroundValue = bgColor as string;
    }

    // color value
    let colorValue = "";

    if (validColors.find((el) => el === color)) {
        colorValue = palette[color as keyof typeof palette]
            ? (palette[color as keyof typeof palette] as {main: string}).main
            : greyColors[color as keyof typeof greyColors];
    }

    // borderRadius value
    let borderRadiusValue = "";

    if (validBorderRadius.find((el) => el === borderRadius)) {
        borderRadiusValue = radius[borderRadius as keyof typeof radius];
    }

    // boxShadow value
    let boxShadowValue = "";

    if (validBoxShadows.find((el) => el === shadow)) {
        boxShadowValue = boxShadows[shadow as keyof typeof boxShadows] as string;
    }

    return {
        opacity,
        background: backgroundValue,
        color: colorValue,
        borderRadius: borderRadiusValue,
        boxShadow: boxShadowValue
    };
});
