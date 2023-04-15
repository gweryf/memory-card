import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";
import panda from "../../../public/panda.png"
import icebear from "../../../public/icebear.png"
import grizz from "../../../public/grizz.png"
import charlie from "../../../public/charlie.png"
import chloe from "../../../public/chloe.png"
import lucy from "../../../public/lucy.png"
import nomnom from "../../../public/nomnom.png"
import ranger from "../../../public/ranger.png"
import martinez from "../../../public/rangermartinez.png"

export default function Body(props) {
    const {score, highscore, gamelogic} = props
    let images = [
        {
            title:'panda',
            src:panda
        },
        {
            title:'grizz',
            src:grizz
        },
        {
            title:'ice bear',
            src:icebear
        },
        {
            title:'charlie',
            src:charlie
        },
        {
            title:'chloe',
            src:chloe
        },
        {
            title:'lucy',
            src:lucy
        },
        {
            title:'nom-nom',
            src:nomnom
        },
        {
            title:'Ranger',
            src:ranger
        },
        {
            title:'Ranger Martinez',
            src:martinez
        },
    ]
    const [cards, setCards] = useState(images)

    function shuffleCards(arr) {
        let index = arr.length
        while(index!=0) {
            let randomIndex = Math.floor(Math.random()*index)
            index--
            [arr[index],arr[randomIndex]] = [arr[randomIndex], arr[index]]
        }
        return arr
    }

    useEffect(()=>{
        const tiles = [...cards]
        setCards(shuffleCards(tiles))
    },[score, highscore])

    return(
        <div className=" bg-stone-700 py-4 h-full text-center">
            {cards.map((card)=>(
                <Card
                    gamelogic = {gamelogic}
                    title = {card.title}
                    src = {card.src}
                />
            ))}
        </div>
    )
}