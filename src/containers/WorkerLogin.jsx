import React from 'react'
import carbonLogo from '../assets/static/images/carbonLogo.png'


const WorkerLogin = () => {
    return(
        <div className="workerLogin">
            <div className="workerLogin__logo">
                <picture>
                    {/* <source media="(min-width: 768px)" srcSet=""/> */}
                    <img src={carbonLogo} alt="carbonLogo"/>
                </picture>
                <h2>Hey, bienvendido de vuelta</h2>
            </div>
            <div className="workerLogin__form">
                <form >
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <input type="password" name="password" id="password" placeholder="Contraseña"/>
                    <input type="submit" value="Iniciar Sesión"/>
                </form>
            </div>
        </div>
    );
}

export default WorkerLogin;