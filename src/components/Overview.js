import React from "react";
import { ReactDOM } from "react";

export default function Overview(props) {
    return (
        console.log(props),
        <div>
            <h1>Title: {props.title}</h1>
            <h4>Description: {props.desc}</h4>
            <h4>Date: {props.date}</h4>
            <h4>Priority: {props.prio}</h4>
        </div>
    )
}