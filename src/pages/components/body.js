import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./card";

export default function Body(props) {
    const {score, highscore, gamelogic} = props
    console.log(score);
    console.log(gamelogic);
    let images = [
        {
            title:'item1',

        },
        {
            title:'item2',

        },
        {
            title:'item3',

        },
        {
            title:'item4',

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
        <div className=" bg-stone-900 h-screen">
            {cards.map((card)=>(
                <Card
                    gamelogic = {gamelogic}
                    title = {card.title}
                />
            ))}
        </div>
    )
}