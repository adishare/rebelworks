import movieServer from '../../config/movieServer';

export function fetchRelatedMovies(movieId) {
    return (dispatch) => {
        dispatch({ type: 'FETCH_RELATEDMOVIES_CALL'})

        movieServer
            .get(`/${movieId}/similar`, {
                params : {
                    api_key : 'f4eae75122e65341fda08ee168bec5f5'
                }
            })
            .then(({data}) => {
                dispatch({ 
                    type: 'FETCH_RELATEDMOVIES_COMPLETE', 
                    payload : data
                })
            })
            .catch(({response}) => {
                dispatch({
                    type: 'FETCH_RELATEDMOVIES_FAIL',
                    payload : response
                })    
            });
            
    }
}