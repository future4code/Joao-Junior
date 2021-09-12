import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">            <img src={props.imagem} />
            <div>
            <p>{props.Endereço}</p>
            <p>{props.Email}</p>
            </div>
        </div>
    )
}

export default CardPequeno
