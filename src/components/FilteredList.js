import React from 'react';
import '../styles/FilteredList.css';
import List from './List.js';

class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola"
      ],
      items: []
    };

    this.filterList = this.filterList.bind(this);
  }

  filterList(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });

    this.setState({
      items: updatedList
    });
  }

  componentWillMount(){
    this.setState({items: this.state.initialItems})
  }

  render(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search..." onChange={this.filterList}/>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default FilteredList;
