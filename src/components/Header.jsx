import { useState } from "react";

export const Header = () => {
  const [showNav, setShowNav] = useState(false);

  function toggleNav(e) {
    e.preventDefault();
    setShowNav((prev) => !prev);
  }

  return (
    <header className="sticky top-0 p-3 shadow-sm bg-black/75 z-50 sm:flex sm:justify-between sm:content-center">
      <div className="flex justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex gap-3 items-center relative justify-center text-center font-light select-none text-2xl md:text-3xl lg:text-4xl"
        >
          <i class="bi bi-layers"></i>
          <span className="block">PAÍSES</span>
        </a>
        {/* Botón "Menu" en dispositivos móviles  */}
        <button className="sm:hidden" onClick={toggleNav}>
          MENU
        </button>
      </div>
      {/* Navbar  */}
      <nav
        className={`absolute bg-black/75 w-full left-0 top-full p-3 sm:relative sm:w-auto sm:block my-auto ${
          !showNav && "hidden"
        }`}
        id="nav"
      >
        <ul className="sm:flex justify-start gap-3">
          <li>
            <a href="/" className="block border-white p-2">
              Inicio
            </a>
          </li>
          <li>
            <a href="/paises/" className="block border-white p-2">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/paises/agregar" className="block border-white p-2">
              Agregar
            </a>
          </li>
          <li>
            <a href="/contacto" className="block border-white p-2">
              Contacto
            </a>
          </li>
          <li>
            <a href="/acerca-de" className="block border-white p-2">
              Acerca de
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
