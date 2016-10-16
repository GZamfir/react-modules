import React from 'react';
import Service from './Service.js';
import '../styles/ServiceChooser.css';

class ServiceChooser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0
    };

    this.addTotal = this.addTotal.bind(this);
  }

  addTotal(price){
    this.setState({ total: this.state.total + price });
  }

  render(){
    var self = this;
    var services = this.props.items.map(function(s){
      return <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />;
    });

    return <div>
      <h1>Our Service</h1>
      <div id="services">
        {services}
        <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>
      </div>
    </div>
  }
}

export default ServiceChooser;
