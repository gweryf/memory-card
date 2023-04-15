import React from "react";

export default function  Card(props) {
    const {gamelogic, title} = props
    return(
        <button
            className=" p-5 mx-4 my-4 bg-stone-400 rounded-xl text-white"
        >
            {title}
        </button>
    )
}