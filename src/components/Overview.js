import React from "react";
import { ReactDOM } from "react";

export default function Overview(props) {
    const {tasks} = props;
    console.log(`props:`, {props});
    return (
        <ul>
        {tasks.map((task, index) => {
          return (
           <div>
            <h1>Title: {task.props.title}</h1>
            <h2>Description: {task.props.desc}</h2>
            <h4>Date: {task.props.date}</h4>
            <h4>Priority: {task.props.prio}</h4>
           </div>
            )
        })}
      </ul>
    )
}