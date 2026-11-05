import React from "react";
import "./Inicio.css";

export default function Inicio() {
    const productos = [
        {
            id: 1,
            nombre: "Balón de fútbol",
            precio: "$19.990",
            imagen: ""
        },
        {
            id: 2,
            nombre: "Camiseta de fútbol",
            precio: "$24.990",
            imagen: ""
        },
        {
            id: 3,
            nombre: "Zapatillas de fútbol",
            precio: "$49.990",
            imagen: ""
        }
    ];

    return (
        <div className="inicio">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#inicio">
                          TikiTaka
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menuTikitaka"
                        aria-controls="menuTikitaka"
                        aria-expanded="false"
                        aria-label="Abrir menú"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menuTikitaka">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link" href="#inicio">Inicio</a>
                            <a className="nav-link" href="#categorias">Categorías</a>
                            <a className="nav-link" href="#productos">Productos</a>
                            <a className="nav-link" href="#contacto">Contacto</a>
                        </div>
                    </div>
                </div>
            </nav>

            <section id="inicio" className="banner-inicio">
                <div className="container text-center">
                    <span className="badge bg-success mb-3">
                        TU PASIÓN POR EL FÚTBOL
                    </span>

                    <h1 className="display-3 fw-bold">
                        BIENVENIDO A TIKITAKA
                    </h1>

                    <p className="lead">
                        Encuentra camisetas, balones y accesorios
                        para vivir el fútbol al máximo.
                    </p>

                    <a href="#productos" className="btn btn-success btn-lg mt-3">
                        Ver productos
                    </a>
                </div>
            </section>

            <section id="categorias" className="container py-5">
                <h2 className="text-center mb-4">Nuestras categorías</h2>

                <div className="row g-4">
                    {["Camisetas", "Balones", "Zapatillas"].map((categoria) => (
                        <div className="col-md-4" key={categoria}>
                            <div className="categoria-card text-center p-4">
                                <h3>{categoria}</h3>
                                <p>Encuentra lo mejor para tu juego.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="productos" className="container py-5">
                <h2 className="text-center mb-4">Productos destacados</h2>

                <div className="row g-4">
                    {productos.map((producto) => (
                        <div className="col-md-4" key={producto.id}>
                            <div className="card producto-card h-100">
                                <img
                                    src={producto.imagen}
                                    className="card-img-top"
                                    alt={producto.nombre}
                                />

                                <div className="card-body text-center">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="precio">{producto.precio}</p>

                                    <a href="#contacto" className="btn btn-success">
                                        Consultar producto
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer id="contacto" className="bg-dark text-white text-center py-4">
                <h4> TikiTaka</h4>
                <p>Tu tienda de fútbol en Chile</p>
                <p className="mb-0">© 2026 TikiTaka</p>
            </footer>
        </div>
    );
}
