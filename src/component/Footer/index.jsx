import React from 'react'
import './index.css'

export default class Footer extends React.Component {

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }

  handleClearAllDone = () => {
    this.props.clearAllDone()
  }

  render() {
    const {todos} = this.props;
    const allNum = todos.length;
    const doneNum = todos.reduce((pre, todoObj) => pre + (todoObj.isDone ? 1 : 0), 0);
    //const doneNum = todos.filter(obj => obj.isDone).length;
    return (
      <div className="todo-footer">
        <label>
          <input type={"checkbox"} checked={allNum === doneNum && allNum !== 0} onChange={this.handleCheckAll}/>
        </label>
        <span className="todo-footer-finished-num">{doneNum}/{allNum} Finished</span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>Finish All</button>
      </div>
    )
  }
}
