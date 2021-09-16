import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components';

const SmallcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
`
const ImagemSmallcard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const TextoHquatro = styled.h4`
margin-bottom: 15px;
`
const DivSegunda = styled.div`
display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <SmallcardContainer>            <ImagemSmallcard src={props.imagem} />
            <DivSegunda>
            <p>{props.Endereço}</p>
            <p>{props.Email}</p>
            </DivSegunda>
        </SmallcardContainer>
    )
}

export default CardPequeno
