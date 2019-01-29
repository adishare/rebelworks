import movieServer from '../../config/movieServer';

export function fetchMovies(payload) {
    return (dispatch) => {
        dispatch({ type: 'FETCH_MOVIES_CALL'})

        movieServer
            .get('/now_playing', {
                params : {
                    api_key : 'f4eae75122e65341fda08ee168bec5f5',
                    page : payload
                }
            })
            .then(({data}) => {
                dispatch({ 
                    type: 'FETCH_MOVIES_COMPLETE', 
                    payload : data.results
                })
            })
            .catch(({response}) => {
                dispatch({
                    type: 'FETCH_MOVIES_FAIL',
                    payload : response
                })    
            });
            
    }
}