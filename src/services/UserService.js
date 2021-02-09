import axios from 'axios';

axios.get('http:localhost:3001/api/users/all')
    .then(res => console.log(res))