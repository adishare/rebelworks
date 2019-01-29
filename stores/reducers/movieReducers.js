const initialState = {
    loading : true,
    error : null,
    movies : []
}

export default ( state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCH_MOVIES_CALL' :
            return { ...state, loading : true }
        case 'FETCH_MOVIES_COMPLETE' :
            return { ...state, loading : false, movies : [...state.movies, ...payload] }
        case 'FETC_MOVIES_FAIL' :
            return { ...state, loading : false, error : payload }
        default:
            return state
    }
}