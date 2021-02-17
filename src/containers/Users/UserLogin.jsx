import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import carbonLogo from "../../assets/static/images/carbonLogo.png";

const UserLogin = (props) => {
  let history = useHistory();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const getUser = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/api/users/pass",
    }).then((res) => console.log(res));
  };



  const login = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/api/users/login",
    }).then((res) => console.log(res));

    history.push('/users/detail')
  };

  const welcomeText = "Iniciar sesion.";

  return (
    <div className="workerLogin">
      <div className="workerLogin__logo">
        <picture>
          {/* <source media="(min-width: 768px)" srcSet=""/> */}
          <img src={carbonLogo} alt="carbonLogo" />
        </picture>
        {/* <h2>{welcomeText}</h2> */}
      </div>
      <div className="workerLogin__form">
        <form>
          <input
            type="email"
            className="inputEmail"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            className="inputPassword"
            name="password"
            id="password"
            placeholder="Contraseña"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <input
            type="submit"
            className="inputSubmit"
            value="Iniciar Sesión"
            onClick={login}
          />
          <input
            type="submit"
            className="inputSubmit"
            value="Obtener usuario"
            onClick={getUser}
          />

          <Link className="inputSubmit" to="/users/register">
            {" "}
            ¿Aún no tienes cuenta? Registrate
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
