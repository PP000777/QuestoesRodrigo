import React from "react";
import CardDeUsuario from "./CardDeUsuario";
import "./CardDeUsuario.css";

function App() {
  return (
    <div className="container-cards">
      <CardDeUsuario
        nome="Ana Silva"
        email="ana.silva@example.com"
        avatarURL="https://i.pravatar.cc/80?img=5"
      />
      <CardDeUsuario
        nome="Carlos Souza"
        email="carlos.souza@example.com"
        avatarURL="https://i.pravatar.cc/80?img=8"
      />
    </div>
  );
}

export default App;
