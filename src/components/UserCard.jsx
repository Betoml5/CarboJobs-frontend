import React from 'react'

const UserCard = () => {
    return (
        <div className="userCard">
            <picture className="userCard__img">

                {/* <source media="(min-width: )" srcset=""/> */}
                {/* <source media="(min-width: )" srcset=""/> */}
            </picture>

            <div className="userCard__names">
                <p className="userCard__names-name">Jesus Alberto </p>
                <p className="userCard__names-lastName">Martinez Luna</p>
            </div>

            <div className="userCard__tags">
                 {/* Here we are going to do a map with the tags */}
                <div className="userCard__tags-tag">Carpenter</div>
            </div>
        </div>
    );
};


export default UserCard;