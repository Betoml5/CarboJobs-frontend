import axios from 'axios';
const API = 'http://localhost:3001/api/workers/';

const getWorkers = async () =>{
    const response = await axios.get(API);
    const data = await response;
    return data;
};

const getWorker = async (id) => {
    const response = await axios.get(`${API}/users/${id}`);
    const data = await response;
    return data;
};

export  {getWorkers, getWorker}




