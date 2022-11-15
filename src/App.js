import React from 'react';
import './App.css';
import Die from './Die';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti';

export default function App() {

  const [dice, setDice] = React.useState(allNewDice)
  const [tenzies, setTenzies] = React.useState(false)

  function checkDieValue(value) {
    return value === dice[0].value;
  }

  React.useEffect(() => {
    let held = dice.every(die => die.isHeld)
    let value = dice.every(die => checkDieValue(die.value))
    if (held && value) {
      setTenzies(true)
    }
  })

  function randomNumber() {
    return Math.floor(Math.random() * 6) + 1
  }

  function allNewDice() {
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice[i] = []
      newDice[i].value = randomNumber()
      newDice[i].isHeld = false
      newDice[i].id = nanoid()
    }
    return newDice
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die
    }))

  }

  function rollDice() {
    if (tenzies) {
      setDice(allNewDice())
      setTenzies(false)
    } else {
      setDice(oldDice => oldDice.map(die => {
        return !die.isHeld ? { ...die, value: randomNumber() } : die
      }))
    }
  }

  function confetti() {
    if (tenzies) {
      return <Confetti />
    }
  }

  const diceElements = dice.map(die => <Die value={die.value} isHeld={die.isHeld} key={die.id} holdDice={() => holdDice(die.id)} />)

  return (
    <div className='main_container'>
      <main>
        <article className='game_container'>
          <h1>Tenzies</h1>
          <p className='explanation'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          {diceElements}
          <button className='roll_dice' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </article>
      </main>
      {confetti()}
    </div>
  );
}

