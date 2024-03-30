export const reducer = (state: SoftUIModel, action: CountAction): SoftUIModel => {
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
        case "SESSION_ID": {
            return {...state, session_id: action.payload};
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};
