import axios from 'axios';

export default  axios.create({    
    baseURL: 'https://sustainable-food-app.herokuapp.com/api/',
    headers: {
        get: {
            referer: '*'
        }
    }
});