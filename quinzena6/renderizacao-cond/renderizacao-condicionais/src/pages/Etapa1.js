import React from 'react'


class Etapa1 extends React.Component {
    render () {
        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p>1. Qual o seu nome?</p>
                <input type="text" name="name" />

                <p>2. Qual a sua idade?</p>
                <input type="text" name="idade" />

                <p>3. Qual o seu email?</p>
                <input type="text" name="name" />

                <p>4. Qual a sua escolaridade?</p>
                <input type="text" name="name" />
                   
                

            </div>
        )
    }
}

export default Etapa1