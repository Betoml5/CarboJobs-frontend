import React, { useEffect, useState } from "react";
import WorkerCard from "../components/WorkerCard";
import { useFirebaseApp } from "reactfire";
import workersMock from "../utils/workersMock";
import {
  getBestWorkers,
  getWorker,
  getWorkers,
} from "../services/WorkerService";
const WorkersContainer = (props) => {
  const firebase = useFirebaseApp();
  console.log(firebase);
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    // getBestWorkers(3).then((data) => setWorkers(data.workers));
    setWorkers(workersMock);
  }, []);
  return (
    <div className="workersContainer">
      <div className="workersContainer__banner">
        {/* <h2>¡Los mejores trabajadores de CarboJobs!</h2> */}
        <h2>Best's month workers</h2>
      </div>

      <div className="workersContainer__slider">
        {workers ? (
          workers.map((worker) => (
            <WorkerCard worker={worker} key={worker.name} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default WorkersContainer;
