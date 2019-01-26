const initialState = {
    loading : true,
    error : null,
    relatedMovies : []
}

export default ( state = initialState, { type, payload }) => {
    switch (type) {
        case 'FETCH_RELATEDMOVIES_CALL' :
            return { ...state, loading : true }
        case 'FETCH_RELATEDMOVIES_COMPLETE' :
            return { ...state, loading : false, relatedMovies : payload }
        case 'FETC_RELATEDMOVIES_FAIL' :
            return { ...state, loading : false, error : payload }
        default:
            return state
    }
}