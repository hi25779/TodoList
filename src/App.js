import './App.css';
import React from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer"

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

  deleteTodo = (id) => {
    const {todos} = this.state;
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    })
    this.setState({todos: newTodos});
  }

  checkAllTodo = (isDone) => {
    const {todos} = this.state;
    const newTodos = todos.map((obj) => {
      return {...obj, isDone}
    });
    this.setState({todos: newTodos});
  }

  clearAllDone = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((obj) => !obj.isDone);
    this.setState({todos: newTodos});
  }

  render() {
    return (
      <div className={"todo-container"}>
        <div className={"todo-wrap"}>
          <Header addTodo={this.addTodo}/>
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

export default App;
