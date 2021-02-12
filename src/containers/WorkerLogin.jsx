import React from 'react'
import { Link } from 'react-router-dom'
import carbonLogo from '../assets/static/images/carbonLogo.png'



const WorkerLogin = () => {

    const welcomeText = "Iniciar sesion.";

    return(
        <div className="workerLogin">
            <div className="workerLogin__logo">
                <picture>
                    {/* <source media="(min-width: 768px)" srcSet=""/> */}
                    <img src={carbonLogo} alt="carbonLogo"/>
                </picture>
                {/* <h2>{welcomeText}</h2> */}
            </div>
            <div className="workerLogin__form">
                <form >
                    <input type="email" className="inputEmail" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" className="inputPassword" id="password" placeholder="Contraseña"/>
                    <input type="submit" className="inputSubmit" value="Iniciar Sesión"/>
                    <Link  className="inputSubmit" to="/login"> ¿Aún no tienes cuenta? Registrate</Link>
                </form>
            </div>
        </div>
    );
}

export default WorkerLogin;