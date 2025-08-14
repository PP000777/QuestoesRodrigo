import React from "react";

function DetalhesProduto(props){

    return(
        <>
        <h2>{props.props.nome}, {props.props.preço}, {props.props.desc}</h2>
        </>
    )
}

export default DetalhesProduto