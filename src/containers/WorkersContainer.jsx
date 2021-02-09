import React, { useEffect, useState } from "react";
import { getWorker, getWorkers } from "../services/WorkerService";

const WorkersContainer = (props) => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getWorkers().then((data) => setWorkers(data));
    console.log(workers);
  }, []);

  return <div className="workersContainer"></div>;
};

export default WorkersContainer;
