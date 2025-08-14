import React from "react";

function CardDeUsuario({ nome, email, avatarURL }) {
  return (
    <div className="card-usuario">
      <img src={avatarURL} alt={`Avatar de ${nome}`} />
      <h3>{nome}</h3>
      <p>{email}</p>
    </div>
  );
}

export default CardDeUsuario;
