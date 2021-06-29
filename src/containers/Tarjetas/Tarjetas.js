import React, { useState, useEffect, useRef } from 'react';
import FlashcardList from './FlashCardList';
import './App.css'
import axios from 'axios'

function Tarjetas() {
  const [flashcards, setFlashcards] = useState([])




  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML= str
    return textArea.value
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios
    .get('https://mcafye3c94.execute-api.us-east-1.amazonaws.com/getTarjetas', {
     
    })
    .then(res => {
      console.log(res);
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = decodeString(questionItem.correct_answer)
        const options = [
          ...questionItem.incorrect_answers.map(a => decodeString(a)),
          answer
        ]
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
    })
  }

  return (
    <>
      <div className="blank">
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <button className="btn">Obtener Tarjetas</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
      </div>
    </>
  );
}

export default Tarjetas;
