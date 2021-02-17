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
        <div className="userRegister__form-wraper">
        <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Nombre"
            className="textInput special"
          />
          <input
            type="text"
            name="last_name"
            id="last_name"
            autoComplete="family-name"
            placeholder="Apellido"
            className="textInput special"
          />
        </div>
        <div className="userRegister__form-wraper">
        <input
            type="text"
            name="nickname"
            id="nickname"
            autoComplete="nickname"
            placeholder="Nombre de usuario"
            className="textInput special"
          />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Correo Electronico"
            className="textInput special"
          />
        </div>
        <div className="userRegister__form-wraper">
        <input
            type="tel"
            name="phone"
            id="phone"
            autoComplete="tel"
            placeholder="Numero Celular"
            className="textInput special"
          />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="password"
            placeholder="Contraseña"
            className="textInput special"
          />
        </div>
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
