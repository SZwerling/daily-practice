import axios from 'axios';


export default axios.create({
    baseURL: 'http://puzzle.mead.io/puzzle'
})