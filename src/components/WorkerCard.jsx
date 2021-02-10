import React from 'react'


const WorkerCard = (props) => {
    return(
        <div className="workerCard">
            <picture className="workerCard__img">

                {/* <source media="(min-width: )" srcset=""/> */}
                {/* <source media="(min-width: )" srcset=""/> */}
            </picture>

            <div className="workerCard__names">
                <p className="workerCard__names-name">Jesus Alberto </p>
                <p className="workerCard__names-lastName">Martinez Luna</p>
            </div>

            <div className="workerCard__tags">
                 {/* Here we are going to do a map with the tags */}
                <div className="workerCard__tags-tag">Carpenter</div>
            </div>
        </div>
    );
};

export default WorkerCard;