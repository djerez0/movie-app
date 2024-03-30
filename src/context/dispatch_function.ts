import {Dispatch} from "react";

export const setTransparentNavbar = (
    dispatch: Dispatch<CountAction>,
    payload: CountAction["payload"]
) => {
    dispatch({type: "TRANSPARENT_NAVBAR", payload});
};

export const setFixedNavbar = (
    dispatch: Dispatch<CountAction>,
    payload: CountAction["payload"]
) => {
    dispatch({type: "FIXED_NAVBAR", payload});
};

export const setAbsoluteNavbar = (
    dispatch: Dispatch<CountAction>,
    payload: CountAction["payload"]
) => {
    dispatch({type: "ABSOLUTE_NAVBAR", payload});
};

export const setSessionId = (dispatch: Dispatch<CountAction>, payload: CountAction["payload"]) => {
    dispatch({type: "SESSION_ID", payload});
};
