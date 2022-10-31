import React from "react";
import "./index.css"

export default class Item extends React.Component {

  render() {
    const {item} = this.props
    return(
      <li>
        <label>
          <input type={"checkbox"} defaultChecked={item.isDone}/>
          <span>{item.name}</span>
        </label>
        <button className="btn btn-danger">delete</button>
      </li>
    )
  }
}