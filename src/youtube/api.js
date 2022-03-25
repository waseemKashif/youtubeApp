import axios from 'axios';
const KEY = 'AIzaSyC1R0D2DoFhXampWdBD-4ij_uqN-NkO0w8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type:'video',
        maxResults:10,
        key:KEY
    }
})