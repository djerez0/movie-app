import hexToRgb from "./hex_to_rgb";

function rgba(color: string, opacity: number) {
    return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
