import React, { useState } from "react";

function AlternarVisibilidade() {
  const [visivel, setVisivel] = useState(true);

  const alternar = () => {
    setVisivel(!visivel);
  };

  return (
    <div>
      {visivel && <p>Este parágrafo pode ser alternado!</p>}
      <button onClick={alternar}>Alternar Visibilidade</button>
    </div>
  );
}

export default AlternarVisibilidade;
