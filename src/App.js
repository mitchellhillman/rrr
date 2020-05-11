import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [type, setType] = useState('add')
  const [amount, setAmount] = useState(20)
  const [difficulty, setDifficulty] = useState(10)
  const [questionList, setQuestionList] = useState([])

  const handleSelectType = (e) => {
    console.log(e)
    setType(e.target.value)
  }

  const handlePrintButtonClick = () => {
    window.print()
  }

  const handleGenerateButtonClick = (e) => {
    e.preventDefault()
    let array = []
    for (let step = 0; step < amount; step++) {
      array.push(generateQuestion())
    }
    setQuestionList(array)
  }

  const handleAmountChange = (e) => {
    console.log(e)
    setAmount(e.target.value)
  }

  const handleDifficultyChange = (e) => {
    console.log(e)
    setDifficulty(e.target.value)
  }

  const typeSymbolMap = {
    divide: '÷',
    multiply: 'x',
    add: '+',
    minus: '-'
  }

  const generateQuestion = () => {
    const max = difficulty
    const first = Math.floor(Math.random() * Math.floor(max))
    const second = Math.floor(Math.random() * Math.floor(max))
    return `${first} ${typeSymbolMap[type]} ${second}`
  }  

  return (
    <div className="app">
      <form className="header">
        <h1>Arithmetic</h1>
        <p>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" onChange={handleAmountChange} defaultValue={amount} max="20" />
        </p>
        <p>
          <label htmlFor="difficulty">Difficulty</label>
          <input type="number" id="difficulty" onChange={handleDifficultyChange} defaultValue={difficulty} />
        </p>
        <p>
          <label htmlFor="type">Type</label>
          <select id="type" defaultValue="add" onChange={handleSelectType}>
            <option value="add">{typeSymbolMap['add']}</option>
            <option value="minus">{typeSymbolMap['minus']}</option>
            <option value="divide">{typeSymbolMap['divide']}</option>
            <option value="multiply">{typeSymbolMap['multiply']}</option>      
          </select>
        </p>
        <div>
          <p><button onClick={handleGenerateButtonClick}>Generate</button></p>
          <p><button onClick={handlePrintButtonClick} disabled={!questionList.length}>Print</button></p>
        </div>
      </form>
      {
        questionList.length
          ? <div className="questionList">
            {questionList.map((question) => {
              return (<p className="question">
                <span className="formula">{question} = </span>
                <span className="answer"></span>
              </p>)
            })}
          </div>
          : ''
      }
    </div>
  );
}

export default App;
