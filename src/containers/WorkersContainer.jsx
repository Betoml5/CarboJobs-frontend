import React, { useEffect, useState } from "react";
import WorkerCard from "../components/WorkerCard";
import {
  getBestWorkers,
  getWorker,
  getWorkers,
} from "../services/WorkerService";
const WorkersContainer = (props) => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    getBestWorkers(3).then((data) => setWorkers(data.workers));
  }, []);
  return (
    <div className="workersContainer">
      {workers.length > 0 ? workers.map((worker) => <WorkerCard key={worker.id} data={worker}  />) : <p>Cargando...</p>}
    </div>
  );
};

export default WorkersContainer;