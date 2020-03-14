import React, { Component } from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

class Home extends Component {
  state = {
    items: []
  };

  _addItem = data => {
    let { items } = this.state;
    console.log(data);
    items = [...items, data];
    this.setState({
      items
    });
  };

  _deleteItem = idItem => {
    console.log("Este es el id", idItem);
    console.log("Estos son los  Items", this.state.items);
    let { items } = this.state;
    let newItems = items.filter(item => item.id !== idItem);
    this.setState({
      items: newItems
    });
  };
  render() {
    let { items } = this.state;
    return (
      <>
        <Header title="Header: Todo List"></Header>
        <TodoList deleteItem={this._deleteItem} items={items}></TodoList>
        <TodoInput addItem={this._addItem}></TodoInput>
      </>
    );
  }
}

export default Home;
