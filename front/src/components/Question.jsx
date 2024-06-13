import { useState } from "react"

const Question = ({ question, submitAnswer, handleClick }) => {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
      setInput(e.target.value)
    }

    const handleSubmit = () => {
      submitAnswer(input)
    }

    return (
      <>
        <h2>{question}</h2>
        <textarea
          id="answer"
          cols={50}
          rows={15}
          value={input}
          onChange={handleInput}
        ></textarea>
        <button type="button" onClick={handleSubmit}>Submit</button>
        <button type="button" onClick={handleClick}>Next</button>
      </>
    )
}

export default Question