import React, { useRef, useState } from "react";
import menuBtnWhite from "../assets/static/images/menuIconWhite.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuRes = useRef();
  //Aqui vamos a validar el menu responsive.

  const handleMenu = () => {
    menuRes.current.classList.toggle('showMenu')
  } 

  return (
    <header className="header">
      <div onClick={handleMenu} id="btnMenu" className="header__btn-menu">
        <img src={menuBtnWhite} alt="menuBtn" />
      </div>
      <nav ref={menuRes} className="header__menu" id="headerMenu">
        <Link className="header__menu-item" to="/">
          Inicio
        </Link>
        <Link className="header__menu-item" to="/">
          Cuenta
        </Link>
        <Link className="header__menu-item" to="/">
          Afiliarse
        </Link>
        <Link className="header__menu-item" to="/">
          Acerca de nosotros
        </Link>
      </nav>
    </header>
  );
};

export default Header;
