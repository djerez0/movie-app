interface CustomTypeText {
    main: string;
    focus: string;
}

interface CustomPaletteColorOptions {
    focus: string;
    main: string;
}

interface CustomPaletteOptions {
    transparent: {
        main: string;
    };
    white: {
        main: string;
        focus: string;
    };
    black: {
        light: string;
        main: string;
        focus: string;
    };
    light: {
        main: string;
        focus: string;
    };
    dark: {
        main: string;
        focus: string;
    };
    gradients: {
        primary: {
            main: string;
            state: string;
        };
        secondary: {
            main: string;
            state: string;
        };
        info: {
            main: string;
            state: string;
        };
        success: {
            main: string;
            state: string;
        };
        warning: {
            main: string;
            state: string;
        };
        error: {
            main: string;
            state: string;
        };
        light: {
            main: string;
            state: string;
        };
        dark: {
            main: string;
            state: string;
        };
    };
    alertColors: {
        primary: {
            main: string;
            state: string;
            border: string;
        };
        secondary: {
            main: string;
            state: string;
            border: string;
        };
        info: {
            main: string;
            state: string;
            border: string;
        };
        success: {
            main: string;
            state: string;
            border: string;
        };
        warning: {
            main: string;
            state: string;
            border: string;
        };
        error: {
            main: string;
            state: string;
            border: string;
        };
        light: {
            main: string;
            state: string;
            border: string;
        };
        dark: {
            main: string;
            state: string;
            border: string;
        };
    };
    badgeColors: {
        primary: {
            background: string;
            text: string;
        };
        secondary: {
            background: string;
            text: string;
        };
        info: {
            background: string;
            text: string;
        };
        success: {
            background: string;
            text: string;
        };
        warning: {
            background: string;
            text: string;
        };
        error: {
            background: string;
            text: string;
        };
        light: {
            background: string;
            text: string;
        };
        dark: {
            background: string;
            text: string;
        };
    };
    inputColors: {
        borderColor: {
            main: string;
            focus: string;
        };
        boxShadow: string;
        error: string;
        success: string;
    };
    sliderColors: {
        thumb: {
            borderColor: string;
        };
    };
    circleSliderColors: {
        background: string;
    };
    tabs: {
        indicator: {
            boxShadow: string;
        };
    };
}

interface CustomTypographyVariantsOptions {
    size: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    lineHeight: {
        sm: number;
        md: number;
        lg: number;
    };
}

interface CustomThemeOptions {
    boxShadows: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        inset: string;
        navbarBoxShadow: string;
        buttonBoxShadow: {
            main: string;
            stateOf: string;
            stateOfNotHover: string;
        };
        inputBoxShadow: {
            focus: string;
            error: string;
            success: string;
        };
    };
    borders: {
        borderColor: string;
        borderWidth: {[key in "0" | "1" | "2" | "3" | "4" | "5"]: string};
        borderRadius: {[key in "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "section"]: string};
    };
    functions: {
        boxShadow: (
            offset: [number, number],
            radius: [number, number],
            color: string,
            opacity: number,
            inset?: string
        ) => string;
        hexToRgb: (color: string) => string;
        pxToRem: (number: number, baseNumber?: number) => string;
        rgba: (color: string, opacity: number) => string;
        linearGradient: (color: string, colorState: string, angle?: number) => string;
    };
}
