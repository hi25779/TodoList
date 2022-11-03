import React from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css"

export default class List extends React.Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  render() {
    const {updateTodo, deleteTodo} = this.props
    return(
      <ul className="todo-main">
        {this.props.todos.map(item => {
          return <Item key={item.id} updateTodo={updateTodo} deleteTodo={deleteTodo} item={item}/>
        })}
      </ul>
    )
  }
}