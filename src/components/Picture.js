import React from 'react';
import '../styles/ServiceChooser.css';

class Picture extends React.Component {
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(){
    this.props.onClick(this.props.id);
  }

  render(){
    var cls = 'picture ' + (this.props.favorite ? 'favorite': '');

    return(
      <div className={cls} onClick={this.clickHandler}>
        <img src={this.props.src} width="200" title={this.props.title}/>
      </div>
    )
  }
}

export default Picture;
