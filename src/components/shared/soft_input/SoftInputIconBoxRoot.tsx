import {styled} from "@mui/material/styles";

export default styled("div")<{ownerState: SoftInputProps}>(({theme, ownerState}) => {
    const {palette, functions} = theme;
    const {size} = ownerState;

    const {dark} = palette;
    const {pxToRem} = functions;

    return {
        lineHeight: 0,
        padding: size === "small" ? `${pxToRem(4)} ${pxToRem(10)}` : `${pxToRem(8)} ${pxToRem(10)}`,
        width: pxToRem(39),
        color: dark.main
    };
});