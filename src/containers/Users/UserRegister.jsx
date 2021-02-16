import React, { useRef } from "react";
import { Link } from "react-router-dom";
import carbonLogo from "../../assets/static/images/carbonLogo.png";

const UserRegister = () => {
  return (
    <div className="userRegister">
      <div className="userRegister__logo">
        <picture>
          <img src={carbonLogo} alt="" />
        </picture>
        {/* <h2>Registrate</h2> */}
      </div>

      <div className="userRegister__form">
        <form action="">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Nombre"
            className="textInput"
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            autoComplete="family-name"
            placeholder="Apellido"
            className="textInput"
          />
          <input
            type="text"
            name="nickname"
            id="nickname"
            autoComplete="nickname"
            placeholder="Nombre de usuario"
            className="textInput"
          />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Correo Electronico"
            className="textInput"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
            placeholder="Numero Celular"
            className="textInput"
          />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="password"
            placeholder="Contraseña"
            className="textInput"
          />
          <input type="submit" className="inputSubmit" value="Registrarse" />
          <Link className="inputSubmit" to="/users/login">
            ¿Ya tienes cuenta? Inicia Sesion
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
