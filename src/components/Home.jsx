import { useState, useEffect } from "react";
import flagsImage from "../assets/flags.png";
import { motion } from "framer-motion";
import { slideInFromSide } from "../utility/animation";

const generateUniqueKey = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    try {
      const savedCountries = JSON.parse(localStorage.getItem("countries"));
      if (Array.isArray(savedCountries)) {
        setCountries(savedCountries);
      } else {
        setCountries([]);
      }
    } catch (error) {
      console.error("Error al cargar los países desde localStorage:", error);
      setCountries([]); // En caso de error, establecer un array vacío
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const countryName = inputValue.trim();
    if (!countryName) {
      alert("El nombre del país no puede estar vacío.");
      return;
    }

    const newCountry = { key: generateUniqueKey(), name: countryName };
    setCountries((prevCountries) => [...prevCountries, newCountry]);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDelete = (key) => {
    setCountries((prevCountries) =>
      prevCountries.filter((country) => country.key !== key)
    );
  };

  return (
    <>
      <section className="container mx-auto text-center p-3 sm:p-6">
        <h1 className="h1 font-light sm:p-6 text-center">BIENVENIDO</h1>
        <p>Aquí podrás registrar y eliminar países de manera sencilla y eficiente.</p>
        <motion.img
          src={flagsImage}
          className="w-full max-w-md mx-auto z-50"
          variants={slideInFromSide(1.5)}
          initial="initial"
          animate={["animate"]}
        />
      </section>

      <section className="container mx-auto p-3 sm:p-6">
        <h2 className="h2 font-light p-3 text-center">LISTA DE PAÍSES</h2>
        <ul className="flex flex-col max-w-md w-full mx-auto">
          {countries.map((country) => (
            <li key={country.key}>
              <div className="flex justify-between gap-5 items-center border border-white p-3">
                <p>{country.name}</p>
                <button
                  className="bg-red-400 rounded-md p-2 cursor-pointer hover:bg-red-500"
                  onClick={() => {
                    handleDelete(country.key);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container mx-auto p-3 text-center sm:p-6">
        <div className="mx-auto p-3 rounded-md max-w-2xl border border-white">
          <h2 className="h2 font-light text-center p-3">AGREGAR NUEVO PAÍS</h2>
          <p>Introduce el nombre del país que deseas agregar a la base de datos.</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 items-center mx-auto p-3"
          >
            <fieldset>
              <label htmlFor=""></label>
              <input
                type="text"
                name="country"
                id="countryInput"
                placeholder="Nombre del país"
                className="p-3 rounded-md bg-white text-black"
                value={inputValue}
                onChange={handleChange}
              />
            </fieldset>
            <button
              type="submit"
              className="bg-[#28a745] p-3 rounded-md cursor-pointer hover:bg-[#218838]"
            >
              Añadir
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
