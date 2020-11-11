import React, { Component } from 'react'
import Calculate from './components/calculate/Calculate'
import css from './app.module.css'
import Bar from './components/barra/Bar'
import { calculateSalaryFrom } from './components/calculate/salary'


export default class App extends Component {
  constructor(){
    super();

    this.state = {
      grossSalary:0,
      baseINSS: 0,
      discontINSS: 0,
      baseIRPF: 0,
      discontIFPR: 0,
      netSalary: 0
    }
  }

  handleChangeSalary = (fullSalary) => {
  const data = calculateSalaryFrom(fullSalary)

  this.setState({ 
    grossSalary: fullSalary,
    baseINSS: data.baseINSS,
    discontINSS: data.discountINSS,
    baseIRPF: data.baseIRPF,
    discontIFPR: data.discountIRPF,
    netSalary: data.netSalary
  });
}
  render() {

    const {grossSalary, baseINSS, discontINSS, baseIRPF,  discontIFPR, netSalary} = this.state;

    return (
      <div>
        <h1 className={css.title}>React-Salário</h1>
        
        <Calculate baseINSS={baseINSS} 
          discontINSS={discontINSS}
          baseIRPF = {baseIRPF}
          discontIFPR = { discontIFPR}
          netSalary = {netSalary}
          grossSalary = {grossSalary}
          onChangeSalary={this.handleChangeSalary}/>
        
        <div className={`container ${css.barProgress}`}>
          <Bar value = {discontINSS} color = "orange"/>
          <Bar value = {discontIFPR} color = "red"/>
          <Bar value = {netSalary} color = "blue"/>
        </div>
      </div>
    )
  }
}


