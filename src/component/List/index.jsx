import React from "react";
import Item from "../Item";
import "./index.css"

export default class List extends React.Component {

  render() {
    const {updateTodo} = this.props
    return(
      <ul className="todo-main">
        {this.props.todos.map(item => {
          return <Item key={item.id} updateTodo={updateTodo} item={item}/>
        })}
      </ul>
    )
  }
}