import React from 'react';
import '../styles/Menu.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: 0
    };

    this.clicked = this.clicked.bind(this);
  }

  clicked(index){
    this.setState({focused: index});
  }

  render(){
    var self = this;

    return(
      <div>
        <ul>{this.props.items.map(function(m, index){
          var style = '';

          if(self.state.focused == index){
            style = 'focused';
          }

          return <li className={style} onClick={self.clicked.bind(self, index)}>{m}</li>;
        })}
        </ul>
        <p>Selected: {this.props.items[this.state.focused]}</p>
      </div>
    );
  }
}

export default Menu;
