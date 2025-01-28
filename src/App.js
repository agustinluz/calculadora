import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

export default class Calculadora extends Component{
  constructor(props){
    super(props);
    this.state={
      input:"0"
    }
  }
  atualizarInput = (valor) => {
    const {input} = this.state;

    if(valor==="CE"){
      this.setState({input:"0"});
    }else if(valor==="="){
      this.setState({input:eval(input).toString()});
    }else{
      if(input ==="0"){
        this.setState({input:valor});
      }else{
        this.setState({input:input+valor});
      }
    }
  }
  
  render(){
    const { input} = this.state;
    return(
      <div className="calculadora">
        <div className="display">{input}</div>
        <div className='buttons'>
          <button onClick={() => this.atualizarInput("7")}>7</button>
          <button onClick={()=> this.atualizarInput("8")}>8</button>
          <button onClick={()=> this.atualizarInput("9")}>9</button>
          <button onClick={()=> this.atualizarInput("/")}>/</button>
          <button onClick={()=> this.atualizarInput("4")}>4</button>
          <button onClick={()=> this.atualizarInput("5")}>5</button>
          <button onClick={()=>this.atualizarInput("6")}>6</button>
          <button onClick={()=> this.atualizarInput("*")}>*</button>
          <button onClick={()=> this.atualizarInput("1")}>1</button>
          <button onClick={()=> this.atualizarInput("2")}>2</button>
          <button onClick={()=> this.atualizarInput("3")}>3</button>
          <button onClick={()=> this.atualizarInput("-")}>-</button>
          <button onClick={()=> this.atualizarInput("0")}>0</button>
          <button onClick={()=> this.atualizarInput(".")}>.</button>
          <button onClick={()=> this.atualizarInput("+")}>+</button>
          <button onClick={()=> this.atualizarInput("=")} className='igual'>=</button>
          <button onClick={()=> this.atualizarInput("CE")} className='borrar'>CE</button>
        </div>
      </div>
    );
  }
}