import React from "react";
import PropTypes from "prop-types";
import {nanoid} from "nanoid";
import "./index.css"

export default class Header extends React.Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp=(event)=>{
    //console.log(event.keyCode);
    const{keyCode, target} = event;
    if (keyCode !== 13) return;
    if(target.value === ''){
      alert("Input is empty!!");
      return;
    }
    const todoObj = {id: nanoid(), name: target.value, isDone: false}
    console.log(todoObj)
    this.props.addTodo(todoObj)
    target.value = ''
  }

  render(){
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"></input>
      </div>
    )
  }
}