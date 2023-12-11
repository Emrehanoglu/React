import React, { useReducer } from "react";
import AlertReducer from "../reducers/alertReducer";

export const AlertContext = React.createContext() 

const AlertContextProvider = (props) => {
    const [state,dispatch] = useReducer(AlertReducer,null)

    const displayError = (msg,type) => {
        /* setError({msg:msg,type:type}) */
        dispatch({ type: "SET_ALERT", error:{msg, type}})

        setTimeout(() => {
            /* setError(null) */
            dispatch({ type: "REMOVE_ALERT"})
        },3000)
    }

    return (
        <AlertContext.Provider value={{
            error: state,
            displayError
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertContextProvider