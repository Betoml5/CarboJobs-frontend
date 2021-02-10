import React, { useEffect, useState } from "react";
import WorkerCard from "../components/WorkerCard";
import {useFirebaseApp} from 'reactfire';
import {
  getBestWorkers,
  getWorker,
  getWorkers,
} from "../services/WorkerService";
const WorkersContainer = (props) => {
  const firebase = useFirebaseApp();
  console.log(firebase);
  const [workers, setWorkers] = useState([]);

  // useEffect(() => {
  //   getBestWorkers(3).then((data) => setWorkers(data.workers));
  // }, []);
  return (
    <div className="workersContainer">
      {/* {workers && workers.map((worker) => <WorkerCard key={worker.id} data={worker} />)} */}
    </div>
  );
};

export default WorkersContainer;
