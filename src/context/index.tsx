"use client";

import {Dispatch, createContext, useContext, useMemo, useReducer} from "react";

const SoftUI = createContext<[SoftUIModel, Dispatch<CountAction>] | null>(null);

SoftUI.displayName = "SoftUI";

function reducer(state: SoftUIModel, action: CountAction): SoftUIModel {
    switch (action.type) {
        case "TRANSPARENT_NAVBAR": {
            return {...state, transparentNavbar: action.payload};
        }
        case "FIXED_NAVBAR": {
            return {...state, fixedNavbar: action.payload};
        }
        case "ABSOLUTE_NAVBAR": {
            return {...state, absoluteNavbar: action.payload};
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function SoftUIControllerProvider({children}: {children: React.ReactNode}) {
    const initialState: SoftUIModel = {
        transparentNavbar: false,
        fixedNavbar: true,
        absoluteNavbar: false
    };
    const [controller, dispatch] = useReducer<typeof reducer>(reducer, initialState);

    const value = useMemo(() => [controller, dispatch], [controller, dispatch]) as unknown as [
        SoftUIModel,
        Dispatch<CountAction>
    ];

    return <SoftUI.Provider value={value}>{children}</SoftUI.Provider>;
}

function useSoftUIController() {
    "use client";
    const context = useContext(SoftUI);

    if (!context) {
        throw new Error("useSoftUIController should be used inside the SoftUIControllerProvider.");
    }

    return context;
}

const setTransparentNavbar = (dispatch: Dispatch<CountAction>, payload: CountAction["payload"]) => {
    dispatch({type: "TRANSPARENT_NAVBAR", payload});
};
const setFixedNavbar = (dispatch: Dispatch<CountAction>, payload: CountAction["payload"]) => {
    dispatch({type: "FIXED_NAVBAR", payload});
};
const setAbsoluteNavbar = (dispatch: Dispatch<CountAction>, payload: CountAction["payload"]) => {
    dispatch({type: "ABSOLUTE_NAVBAR", payload});
};

export {
    SoftUIControllerProvider,
    useSoftUIController,
    setTransparentNavbar,
    setFixedNavbar,
    setAbsoluteNavbar
};
