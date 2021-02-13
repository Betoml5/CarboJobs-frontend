import React, { Profiler } from "react";
import profileIcon from '../assets/static/images/account.png';

const WorkerCard = ({ worker }) => {
  // console.log(name);

  return (
    <div className="workerCard">
      <picture className="workerCard__img">
        {/* <source media="(min-width: )" srcset=""/> */}
        {/* <source media="(min-width: 320px)" srcset={profileIcon}/> */}
        <img src={profileIcon} alt=""/>
      </picture>

      <div className="workerCard__names">
        <p className="workerCard__names-name">Nombre: {worker.name}</p>
        <p className="workerCard__names-lastName">Apellido: {worker.last_name}</p>
      </div>

      <div className="workerCard__tags">
        {/* Here we are going to do a map with the tags */}
        <div className="workerCard__tags-tag">Carpenter</div>
      </div>

      <div className="workerCard__rating">
        <p>{worker.rating}</p>
      </div>
    </div>
  );
};

export default WorkerCard;
