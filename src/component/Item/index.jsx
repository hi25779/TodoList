import React from "react";
import "./index.css"

export default class Item extends React.Component {

  state = {
    mouse: false
  }
  handleMouse = (flag)=>{
    return() => {
      this.setState({mouse:flag})
    }
  }

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }

  render() {
    const {item} = this.props
    const {mouse} = this.state
    return(
      <li style={{background: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type={"checkbox"} onChange={this.handleCheck(item.id)} defaultChecked={item.isDone}/>
          <span>{item.name}</span>
        </label>
        <button className="btn btn-danger" style={{display: mouse ? 'block' :'none'}}>delete</button>
      </li>
    )
  }
}