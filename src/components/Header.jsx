import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

import carbonIcon from "../assets/static/images/carbonLogo.png";
import homeIcon from "../assets/static/images/home.png";
import accountIcon from "../assets/static/images/account.png";
import afiliateIcon from "../assets/static/images/network.png";
import aboutIcon from "../assets/static/images/about.png";
import menuBtnWhite from "../assets/static/images/menuIconWhite.png";

const Header = () => {
  const hasUser = false;

  const menuRes = useRef();
  //Aqui vamos a validar el menu responsive.

  const handleMenu = () => {
    menuRes.current.classList.toggle("showMenu");
  };

  return (
    <header className="header">
      <div onClick={handleMenu} id="btnMenu" className="header__btn-menu">
        <img src={menuBtnWhite} alt="menuBtn" />
        <img src={carbonIcon} alt="" />
      </div>
      <nav ref={menuRes} className="header__menu" id="headerMenu">
        <NavLink
          exact={true}
          activeClassName="is-active"
          className="header__menu-item"
          to="/"
        >
          <img src={homeIcon} alt="" />
          <p>Inicio</p>
        </NavLink>
        {hasUser ? (
          <NavLink
            exact={true}
            activeClassName="is-active"
            className="header__menu-item"
            to="/users/1"
          >
            <img src={accountIcon} alt="" />
            <p>Cuenta</p>
          </NavLink>
        ) : (
          <NavLink
            exact={true}
            activeClassName="is-active"
            className="header__menu-item"
            to="/login"
          >
            <img src={accountIcon} alt="" />
            <p>Iniciar Sesion</p>
          </NavLink>
        )}
        <NavLink
          exact={true}
          activeClassName="is-active"
          className="header__menu-item"
          to="/workers/register"
        >
          <img src={afiliateIcon} alt="" />
          <p> Afiliarse</p>
        </NavLink>
        <NavLink
          exact={true}
          activeClassName="is-active"
          className="header__menu-item"
          to="/nosotros"
        >
          <img src={aboutIcon} alt="" />
          <p>Acerca de nosotros</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
