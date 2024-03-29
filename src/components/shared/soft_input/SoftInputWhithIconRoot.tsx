import {styled} from "@mui/material/styles";

export default styled("div")<{ownerState: SoftInputProps}>(({theme, ownerState}) => {
    const {palette, functions, borders} = theme;
    const {error, success, disabled} = ownerState;

    const {inputColors, grey, white} = palette;
    const {pxToRem} = functions;
    const {borderRadius, borderWidth} = borders;

    let borderColorValue = inputColors.borderColor.main;

    if (error) {
        borderColorValue = inputColors.error;
    } else if (success) {
        borderColorValue = inputColors.success;
    }

    return {
        display: "flex",
        alignItems: "center",
        backgroundColor: disabled ? grey[200] : white.main,
        border: `${borderWidth[1]} solid`,
        borderRadius: borderRadius.md,
        borderColor: borderColorValue,
        width: "100%",
        "&.MuiInputBase-input": {
            height: pxToRem(20)
        }
    };
});
