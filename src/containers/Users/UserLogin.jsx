import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginUser, getUser } from "../../services/UserService";
import carbonLogo from "../../assets/static/images/carbonLogo.png";

const UserLogin = (props) => {
  let history = useHistory();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
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
            className="textInput"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            className="textInput"
            name="password"
            id="password"
            placeholder="Contraseña"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <input type="submit" className="inputSubmit" value="Iniciar Sesión" />
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
