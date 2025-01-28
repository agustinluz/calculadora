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
      if(input ==="0" ){
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
          <button onClick={this.atualizarInput.bind(this,"7")}>7</button>
          <button onClick={this.atualizarInput.bind(this,"8")}>8</button>
          <button onClick={this.atualizarInput.bind(this,"9")}>9</button>
          <button onClick={this.atualizarInput.bind(this,"/")}>/</button>
          <button onClick={ this.atualizarInput.bind(this,"4")}>4</button>
          <button onClick={ this.atualizarInput.bind(this,"5")}>5</button>
          <button onClick={this.atualizarInput.bind(this,"6")}>6</button>
          <button onClick={ this.atualizarInput.bind(this,"*")}>*</button>
          <button onClick={ this.atualizarInput.bind(this,"1")}>1</button>
          <button onClick={ this.atualizarInput.bind(this,"2")}>2</button>
          <button onClick={ this.atualizarInput.bind(this,"3")}>3</button>
          <button onClick={ this.atualizarInput.bind(this,"-")}>-</button>
          <button onClick={ this.atualizarInput.bind(this,"0")}>0</button>
          <button onClick={ this.atualizarInput.bind(this,".")}>.</button>
          <button onClick={ this.atualizarInput.bind(this,"+")}>+</button>
          <button onClick={ this.atualizarInput.bind(this,"=")} className='igual'>=</button>
          <button onClick={ this.atualizarInput.bind(this,"CE")} className='borrar'>CE</button>
        </div>
      </div>
    );
  }
}