import React, { Profiler } from "react";
import starIcon from "../assets/static/images/star.png";
import profileIcon from "../assets/static/images/account.png";
import Rating from "./Rating";
import workers from "../utils/workersMock";
const WorkerCard = ({ worker }) => {
  return (
    <div className="workerCard">
      <div className="workerCard__img-container">
        <picture className="workerCard__img">
          {/* <source media="(min-width: )" srcset=""/> */}
          {/* <source media="(min-width: 320px)" srcset={profileIcon}/> */}
          <img src={profileIcon} alt="" />
        </picture>
      </div>

      <div className="workerCard__names">
        <p className="workerCard__names-name">Nombre: {worker.name}</p>
        <p className="workerCard__names-lastName">
          Apellido: {worker.last_name}
        </p>
      </div>

      <div className="workerCard__tags">
        {/* Here we are going to do a map with the tags */}
        {worker.tags.map((tag) => (
          <p className="worker_tag">{tag}</p>
        ))}
      </div>

      <div className="workerCard__rating">
        <Rating rating={worker.rating} />
      </div>
    </div>
  );
};

export default WorkerCard;
