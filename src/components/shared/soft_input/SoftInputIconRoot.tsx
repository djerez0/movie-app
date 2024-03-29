import {Icon} from "@mui/material";
import {styled} from "@mui/material/styles";

export default styled(Icon)<{ownerState: SoftInputProps}>(({theme, ownerState}) => {
    const {typography} = theme;
    const {size} = ownerState;

    const {fontWeightBold, size: fontSize} = typography;

    return {
        fontWeight: fontWeightBold,
        fontSize: size === "small" ? `${fontSize.md} !important` : "",
        width: "100%"
    };
});
