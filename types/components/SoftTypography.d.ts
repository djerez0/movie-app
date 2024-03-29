interface SoftTypographyProps {
    color?: keyof ValidColors | keyof CustomGradients;
    textTransform?:
        | "capitalize"
        | "uppercase"
        | "lowercase"
        | "none"
        | "full-width"
        | "full-size-kana";
    verticalAlign?:
        | "baseline"
        | "sub"
        | "super"
        | "text-top"
        | "text-bottom"
        | "middle"
        | "top"
        | "unset"
        | "bottom";
    fontWeight?: "light" | "regular" | "medium" | "bold";
    opacity?: number;
    textGradient?: boolean;
}
