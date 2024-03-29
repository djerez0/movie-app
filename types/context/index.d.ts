type CountActionKind = "TRANSPARENT_NAVBAR" | "FIXED_NAVBAR" | "ABSOLUTE_NAVBAR";

interface SoftUIModel {
    transparentNavbar: boolean;
    fixedNavbar: boolean;
    absoluteNavbar: boolean;
}

interface CountAction {
    type: CountActionKind;
    payload: ValueOf<SoftUIModel>;
}
