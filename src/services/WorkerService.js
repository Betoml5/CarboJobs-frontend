import axios from "axios";
const API = "http://localhost:3002/api";

const getWorkers = async () => {

  try {
    const response = await axios.get(`${API}/workers/all`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getWorker = async (id) => {
  try {
    const response = await axios.get(`${API}/workers/worker/${id}`);
    return response.data || [];
  } catch (error) {
    console.log(error);
  }
};

const getBestWorkers = async (limit) => {
  try {
    const response = await axios.get(`${API}/workers/rating/${limit}`);
    return response.data || [];
  } catch (error) {
    console.log(error);
  }
};

export { getWorkers, getWorker, getBestWorkers };
