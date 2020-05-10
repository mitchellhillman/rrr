import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [type, setType] = useState('add')
  const [amount, setAmount] = useState(10)
  const [difficulty, setDifficulty] = useState(10)

  const handleSelectType = (e) => {
    console.log(e)
    setType(e.target.value)
  }

  const handlePrintButtonClick = () => {
    window.print()
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

  let questionList = [];
  for (let step = 0; step < amount; step++) {
    questionList.push(generateQuestion())
  }

  return (
    <div className="app">
      <form className="header">
        <h1>Arithmetic</h1>
        <p>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" onChange={handleAmountChange} defaultValue={amount} max="16" />
        </p>
        <p>
          <label htmlFor="difficulty">Difficulty</label>
          <input type="number" id="difficulty" onChange={handleDifficultyChange} defaultValue={amount} />
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
        <p>
          <button onClick={handlePrintButtonClick}>Print</button>
        </p>
      </form>
      <div className="worksheet">
        {
          questionList.map((question) => {
            return (<p className="question">
              <span className="formula">{question} = </span>
              <span className="answer"></span>
            </p>)
          })
        }
      </div>
    </div>
  );
}

export default App;
