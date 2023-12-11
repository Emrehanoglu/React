const AlertReducer = (state,action) => {
    switch(action.type){
        case "SET_ALERT":
            return action.error
        case "REMOVE_ALERT":
            return null /* state bilgisini ezdim ve null yaptım */
        default:
            return state
    }
}

export default AlertReducer