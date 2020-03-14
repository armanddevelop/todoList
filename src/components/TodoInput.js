import React, { Component } from "react";

class TodoInput extends Component {
  state = { value: "", noValue: false };
  _handlerChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  _handlerSubmit = e => {
    let { value } = this.state;
    let { addItem } = this.props;
    e.preventDefault();
    console.log(value);
    //debugger;
    if (value === "" || value === undefined) {
      this.setState({
        noValue: true
      });
      return;
    }
    const idItem = new Date().getTime();
    const newItem = {
      name: value,
      id: idItem
    };
    addItem(newItem);
    this.setState({
      value: ""
    });
  };
  render() {
    let { value, noValue } = this.state;
    return (
      <>
        <form onSubmit={this._handlerSubmit}>
          <input
            type="text"
            placeholder="note"
            value={value}
            onChange={this._handlerChange}
          ></input>

          <button id="send" type="submit">
            Guardar tarea
          </button>
        </form>
        {noValue && <p style={{ color: "red" }}>Ingresa una tarea</p>
        /*noValue ? <p style={{ color: "red" }}>Ingresa una tarea</p> : null*/
        }
      </>
    );
  }
}

export default TodoInput;
