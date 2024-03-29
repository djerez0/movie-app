interface GreyColors {
    "grey-100": string;
    "grey-200": string;
    "grey-300": string;
    "grey-400": string;
    "grey-500": string;
    "grey-600": string;
    "grey-700": string;
    "grey-800": string;
    "grey-900": string;
}

interface ValidColors {
    transparent: {main: string; focus: string};
    white: {main: string; focus: string};
    black: {main: string; focus: string};
    primary: {main: string; focus: string};
    secondary: {main: string; focus: string};
    info: {main: string; focus: string};
    success: {main: string; focus: string};
    warning: {main: string; focus: string};
    error: {main: string; focus: string};
    light: {main: string; focus: string};
    dark: {main: string; focus: string};
    text: {main: string; focus: string};
}

interface SoftBoxProps {
    variant?: "contained" | "gradient";
    bgColor?: keyof ValidColors | keyof GreyColors | keyof CustomPaletteOptions["gradients"];
    color?: keyof ValidColors | keyof GreyColors | "inherit";
    opacity?: number;
    borderRadius?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "section" | "none";
    shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "inset" | "none";
}
