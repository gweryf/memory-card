import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Body from './components/body'
import { useState } from 'react'

export default function Home() {
  const [score, setScore] = useState(0)
  const [highscore, sethighscore] = useState(0)
  const [cards, addcards] = useState([])

  function updateScore() {
    setScore(score+1)
  }

  function updateHighscore() {
    sethighscore(score)
  }

  function updateCards(cardname) {
    addcards([...cards, cardname])
  }

  function reset() {
    setScore(0)
    addcards([])
  }

  function logic(cardname){
    if(cards.includes(cardname)) {
      if(highscore<score) {
        updateHighscore()
      }
      reset()
    } else {
      updateScore()
      updateCards(cardname)
      console.log(score);
      console.log(highscore);
    }
  }

  return (
    <>
      <Header
        score = {score}
        highscore = {highscore}
      />
      <Body
        score = {score}
        highscore = {highscore}
        gamelogic = {logic}
      />
    </>
  )
}
