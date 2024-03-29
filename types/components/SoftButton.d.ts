interface SoftButtonProps {
    variant?: "contained" | "gradient" | "outlined" | "text";
    color?: keyof ValidColors;
    circular?: boolean;
    iconOnly?: boolean;
    size?: "small" | "medium" | "large";
}
