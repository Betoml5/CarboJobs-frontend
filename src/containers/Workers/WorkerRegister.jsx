/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useFirebaseApp } from "reactfire";

const WorkerRegister = () => {
  const firebase = useFirebaseApp();

  //   const Storageref = firebase.storage().ref(`/workerProfileImgs${__filename}`);
  // Esto sera para que el worker tenga una imagen

  return (
    <div className="workerRegister">
      {/* <div className="workerRegister__wraper">
        <h3 className="workerRegister__title">¿Quieres unirte a CarboJobs?</h3>
        <p className="workerRegister__subtitle">
          ¡Rellena este formulario y espera una respuesta!
        </p>
        <a href="/">Rellenar Formulario</a>
      </div> */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd3bJUBP2UZGS68METX-mSkm0UnjUPJ1d2ldKAECoJG7RMngw/viewform?embedded=true"
        width="300"
        height="1122"
        frameBorder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default WorkerRegister;
