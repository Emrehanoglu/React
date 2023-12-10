const UsersReducer = (state,action) => {
    switch(action.type){
        case "SEARCH_USERS":
            return {
                ...state, /* o an ki state bilgileri gelsin */
                users: action.users, /* users ları state içerisine atsın */
                loading: false /* loading 'i false yapsın */
            }
        case "SET_LOADING":
            return{
                ...state, /* o an ki state bilgilei */
                loading: true /* loading 'i true yapsın, güncellesin, 2. olarak bunu vererek mevcut loading' i ezdim. */
            }
        case "CLEAR_USERS":
            return {
                ...state, /* o an ki state bilgilei */
                users: [], /* mevcut users bilgilerini ezerek boş dizi ataması yaptım */
                loading: false /* mevcut loading bilgisini ezerek false ataması yaptım */
            }
        default:
            return state
    }
}

export default UsersReducer