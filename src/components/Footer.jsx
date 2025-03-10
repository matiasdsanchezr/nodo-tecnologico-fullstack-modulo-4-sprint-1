import { useState } from "react";

export const Footer = () => {
  const [color, setColor] = useState("black");

  const handleClick = () => {
    setColor("white");
  };

  return (
    <footer className={`text-center bg-${color} p-3`}>
      <p className="font-light text-xl">Creado por: Matías D. Sanchez</p>
      <p className="font-light text-xl">NODO TECNOLÓGICO - 2024 ©</p>
      <button onClick={handleClick}>Cambiar color</button>
    </footer>
  );
};
