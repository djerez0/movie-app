interface SoftInputProps {
    size?: "small" | "medium" | "large";
    error?: boolean;
    success?: boolean;
    iconDirection?: "left" | "right";
    direction?: boolean;
    disabled?: boolean;
    icon?: {
        component: ReactNode;
        direction: "left" | "right";
    };
}
