"use client";

import {usePathname} from "next/navigation";
import {Dispatch, createContext, useContext, useEffect, useMemo, useReducer} from "react";
import {reducer} from "./reducer";
import {
    setAbsoluteNavbar,
    setFixedNavbar,
    setTransparentNavbar,
    setSessionId
} from "./dispatch_function";

const SoftUI = createContext<[SoftUIModel, Dispatch<CountAction>] | null>(null);

SoftUI.displayName = "SoftUI";

function SoftUIControllerProvider({children}: {children: React.ReactNode}) {
    const initialState: SoftUIModel = {
        transparentNavbar: false,
        fixedNavbar: true,
        absoluteNavbar: false,
        session_id: ""
    };
    const [controller, dispatch] = useReducer<typeof reducer>(reducer, initialState);
    const pathname = usePathname();

    const value = useMemo(() => [{...controller}, dispatch], [controller, dispatch]) as unknown as [
        SoftUIModel,
        Dispatch<CountAction>
    ];

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [pathname]);

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

export {
    SoftUIControllerProvider,
    useSoftUIController,
    setAbsoluteNavbar,
    setFixedNavbar,
    setTransparentNavbar,
    setSessionId
};
