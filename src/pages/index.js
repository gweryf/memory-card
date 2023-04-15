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

  function reset() {
    setScore(0)
    addcards([])
  }

  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}
