import React, { useRef } from "react";
import { Link } from "react-router-dom";

import homeIcon from "../assets/static/images/home.png";
import accountIcon from "../assets/static/images/account.png";
import afiliateIcon from "../assets/static/images/network.png";
import aboutIcon from "../assets/static/images/about.png";
import menuBtnWhite from "../assets/static/images/menuIconWhite.png";

const Header = () => {
  const menuRes = useRef();
  //Aqui vamos a validar el menu responsive.

  const handleMenu = () => {
    menuRes.current.classList.toggle("showMenu");
  };

  return (
    <header className="header">
      <div onClick={handleMenu} id="btnMenu" className="header__btn-menu">
        <img src={menuBtnWhite} alt="menuBtn" />
      </div>
      <nav ref={menuRes} className="header__menu" id="headerMenu">
        <Link className="header__menu-item" to="#">
          <img src={homeIcon} alt="" />
          <p>Inicio</p>
        </Link>
        <Link className="header__menu-item" to="#">
          <img src={accountIcon} alt="" />
          <p>Cuenta</p>
        </Link>
        <Link className="header__menu-item" to="#">
          <img src={afiliateIcon} alt="" />
          <p> Afiliarse</p>
        </Link>
        <Link className="header__menu-item" to="#">
          <img src={aboutIcon} alt="" />
          <p>Acerca de nosotros</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
