import './App.css';
import React from "react";
import Header from "./component/Header";
import List from "./component/List";

class App extends React.Component {
  state = {
    todos: [
      {id: 1, name: 'sleep', isDone: true},
      {id: 2, name: 'study', isDone: false}
    ]
  }
  addTodo = (todoItem) => {
    this.state.todos = [todoItem, ...this.state.todos]
    console.log(this.todos)
    this.setState({todos: this.state.todos})
  }

  updateTodo = (id, ifTodo) => {
    const newTodos = this.state.todos.map(item => {
      if(item.id === id) {
        return {...item, isDone: ifTodo}
      } else {
        return item;
      }
    });
    this.setState({todos: newTodos})
  }

  render() {
    return (
      <div className={"todo-container"}>
        <div className={"todo-wrap"}>
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} updateTodo={this.updateTodo}/>
        </div>
      </div>
    )
  }
}

export default App;
