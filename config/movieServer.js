import axios from 'axios';

const movieServer = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie'
})

export default movieServer