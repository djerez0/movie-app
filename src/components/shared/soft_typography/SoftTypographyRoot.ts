import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

export default styled(Typography)<{ownerState: SoftTypographyProps}>(({theme, ownerState}) => {
    const {palette, typography, functions} = theme;
    const {color, textTransform, verticalAlign, fontWeight, opacity, textGradient} = ownerState;

    const {gradients, transparent} = palette;
    const {fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold} = typography;
    const {linearGradient} = functions;

    // fontWeight styles
    const fontWeights = {
        light: fontWeightLight,
        regular: fontWeightRegular,
        medium: fontWeightMedium,
        bold: fontWeightBold
    };

    // styles for the typography with textGradient={true}
    const gradientStyles = () => ({
        backgroundImage:
            color !== "inherit" &&
            color !== "text" &&
            color !== "white" &&
            gradients[color as keyof typeof gradients]
                ? linearGradient(
                      gradients[color as keyof typeof gradients].main,
                      gradients[color as keyof typeof gradients].state
                  )
                : linearGradient(gradients.dark.main, gradients.dark.state),
        display: "inline-block",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: transparent.main,
        position: "relative" as const,
        zIndex: 1
    });

    return {
        opacity,
        textTransform,
        verticalAlign,
        textDecoration: "none",
        color:
            color === "inherit" || !palette[color as keyof typeof palette]
                ? "inherit"
                : (palette[color as keyof typeof palette] as {main: string}).main,
        fontWeight: fontWeight ? fontWeights[fontWeight] : fontWeights.regular,
        ...(textGradient ? gradientStyles() : {})
    };
});
