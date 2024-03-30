type CountActionKind = "TRANSPARENT_NAVBAR" | "FIXED_NAVBAR" | "ABSOLUTE_NAVBAR" | "SESSION_ID";

interface SoftUIModel {
    transparentNavbar: boolean;
    fixedNavbar: boolean;
    absoluteNavbar: boolean;
    session_id?: string;
}

interface CountAction {
    type: CountActionKind;
    payload: ValueOf<SoftUIModel>;
}
