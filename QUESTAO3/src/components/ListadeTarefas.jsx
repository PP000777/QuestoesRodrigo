import React from "react";

function ListaDeTarefas() {
  const tarefas = [
    { id: 1, descricao: "Estudar React", concluida: true },
    { id: 2, descricao: "Fazer exercícios", concluida: false },
    { id: 3, descricao: "Ler documentação", concluida: true }
  ];

  return (
    <ul>
      {tarefas.map((tarefa) => (
        <li key={tarefa.id}>
          {tarefa.descricao} {tarefa.concluida ? "(Concluída)" : ""}
        </li>
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
