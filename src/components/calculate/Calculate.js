import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { formatMoney } from '../../Helpers/formatNumber'
import css from './calcule.module.css'

export default class Calculate extends Component {

  handleChange = (event) =>{
    const fullSalary = event.target.value
   this.props.onChangeSalary(fullSalary)
  }

  percentual = (value) => {
    const { grossSalary } = this.props

    if(value === 0){
      return value;
    }else{
     let percentualNetSalary  = (value * 100) / grossSalary;
     return percentualNetSalary.toFixed(2);
    }
  }

  render() {
    const {baseINSS, discontINSS, baseIRPF,  discontIFPR, netSalary} = this.props;

    return (
      <div className="container">
        <label className={css.font}>Salário bruto:</label>
        <input 
          type="text" 
          placeholder="Digite seu salário..." 
          onChange={this.handleChange}
          className={`form-control ${css.input}`}/>

        <div className={css.layout}>

          <div className={css.inputLayout}>
            <label className={css.font}>Base INSS:</label>
            <input className= {`form-control ${css.inputBaseINSSBaseIPRF}`} disabled value={formatMoney(baseINSS)}></input>
          </div>

          <div className={css.inputLayout}>
            <label  className={css.font}>Desconto INSS:</label>
            <input className= {`form-control ${css.inputINSS}`}  
              disabled 
              value={`${formatMoney(discontINSS)} (${this.percentual(discontINSS)}%)`}/>
          </div>

          <div className={css.inputLayout}>
            <label className={css.font}>Base IRPF:</label>
            <input className= {`form-control ${css.inputBaseINSSBaseIPRF}`} 
              disabled 
              value={formatMoney(baseIRPF)}/>
          </div>

          <div className={css.inputLayout}>
            <label  className={css.font}>Desconto IRPF:</label>
            <input className={`form-control ${css.inputIPRF}`} 
              disabled 
              value={`${formatMoney(discontIFPR)} (${this.percentual(discontIFPR)}%)`}/>
          </div>

        </div>
        <div className={css.inputLayout}>
            <label  className={css.font}>Salário Liquido::</label>
            <input className={`form-control ${css.inputNetSalary}`} 
              disabled 
              value={`${formatMoney(netSalary)} (${this.percentual(netSalary)}%)`}/>
          </div>
      </div>
    )
  }
}
