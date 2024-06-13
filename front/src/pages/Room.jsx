import { useEffect, useState } from "react"
import data from '../cards.json'
import Question from "../components/Question"
import { getResponse } from "../utils/openai"

const Room = () => {
    const [cardNum, setCardNum] = useState(0)
    const [flashcard, setFlashcard] = useState(data.cards[cardNum])

    useEffect(() => {
        setFlashcard(data.cards[cardNum])
    }, [cardNum])

    const handleClick = () => {
      setCardNum(cardNum + 1)
    }

    const submitAnswer = async (input) => await getResponse(flashcard.question, flashcard.answer, input)

    return (
      <div>
        <h1>ROOM 1</h1>
        <Question question={flashcard.question} handleClick={handleClick} submitAnswer={submitAnswer} />
      </div>
    )
}

export default Room