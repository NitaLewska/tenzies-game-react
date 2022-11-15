import React from "react";
import "./Die.css"
import "./dice-1.0.min.css"

export default function Die(props) {
    return (
        <button className={'dice' + (props.isHeld ? " held" : "") + (" dice-" + props.value)} onClick={props.holdDice}></button>
    )
}