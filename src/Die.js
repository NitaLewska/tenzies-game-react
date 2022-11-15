import React from "react";
import "./Die.css"

export default function Die(props) {
    return (
        <button className={'dice' + (props.isHeld ? " held" : "")} onClick={props.holdDice}>{props.value}</button>
    )
}