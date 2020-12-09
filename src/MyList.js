import React, { Component } from 'react';
import './ListItem.css';
import './App.css';
import ListItem from "./components/ListItem"

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: []
    }
  }

  clearList (e) {
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange (e) {
    this.setState({
      newItem: [e.target.value]
    })
  }

  addItem (e) {
    e.preventDefault()

    let newList = this.state.toDoItemArray.slice()
    newList.push(this.state.newItem)
    console.log("newList");
    this.setState({
      newItem: [],
      toDoItemArray: newList

    })
  }
  render() {
    
    let todoItems = this.state.toDoItemArray.map( (item, index) => {
      return <ListItem doThis={item} key={index} />
    })
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <div>
          <ul>
            {todoItems}
          </ul>
          <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
          <form>
            <input type="text"
            placeholder="Type an item here"
            onChange={(e) => this.newItemChange(e)}
            value={this.state.newItem}
            />
            <button onClick={(e) => this.addItem(e)}>Add it!</button>
          </form>
        </div>
      </div>
    );

  }
}

export default MyList;
