import React from 'react'
import './App.css';
import Etapa1 from './pages/Etapa1'
import Etapa2 from './pages/Etapa2'
import Etapa3 from './pages/Etapa3'
import Final from './pages/Final'




class App extends React.Component {
 
  state = {
    etapa: 1,
  }
  
  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1 />  
      case 2:
        return <Etapa2 />  
      case 3:
        return <Etapa3 />  
      case 4:
        return <Final />
        default:
          return <p>Erro! Página não encontrada</p>
    }
  }
  
  onClickIrParaProximaEtapa = () => {
    const valoretapa = this.state.etapa
    const maisum = valoretapa + 1
    this.setState({etapa: maisum})
  } 

  render () {    
  return (
    <div className="container">           
              {this.renderizaEtapa()}
       <button onClick={this.onClickIrParaProximaEtapa}>Próxima etapa</button>
       
    </div>
  );
}
}
export default App;

