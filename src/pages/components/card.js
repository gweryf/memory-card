import React from "react";
import Image from "next/image";

export default function  Card(props) {
    const {gamelogic, card:{title, src}} = props
    return(
        <button
            onClick={() => gamelogic(title)}
            className=" p-5 mx-4 my-4 border bg-stone-600 rounded-lg text-white shadow-xl transform transition duration-300 hover:scale-110"
        >
            <div>
                <Image className=" rounded-xl w-60 h-56 my-2" src={src} alt={title}/>
            </div>
            <div className=" font-bold text-xl">
                {title}
            </div>
        </button>
    )
}