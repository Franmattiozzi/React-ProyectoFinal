import React from 'react';
import CartWidget from './CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="../index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" href="colecciones.html">Colecciones</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="dondeEstamos.html">Sucursales</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="sobreNostros.html">Sobre nosotros</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="productos.html">Comprar</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </div>
    </nav>
        
    )
}

export default Header