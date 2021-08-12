import React from "react";

const Cancion = ({ letra }) => {
  if (!letra) return null;
  return (
    <>
      <h2>Letra Cacion</h2>
      <p className="letra">{letra}</p>
    </>
  );
};

export default Cancion;
