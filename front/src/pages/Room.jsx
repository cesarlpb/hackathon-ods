import { useEffect, useState } from "react"
import data from '../cards.json'
import Question from "../components/Question"
import Feedback from "../components/Feedback"
import { getResponse } from "../utils/openai"

const Room = () => {
    const [cardNum, setCardNum] = useState(0)
    const [flashcard, setFlashcard] = useState(data.cards[cardNum])
    const [feedback, setFeedback] = useState('')
    const [userAnswer, setUserAnswer] = useState('')

    useEffect(() => {
        setFlashcard(data.cards[cardNum])
    }, [cardNum])

    const handleNextClick = () => {
      setFeedback('')
      setCardNum(cardNum + 1)
      setUserAnswer('')
    }

    const submitAnswer = async (input) => {
      if (!input) return
      const feedback = await getResponse(flashcard.question, flashcard.answer, input)
      setUserAnswer(input)
      setFeedback(feedback)
    }

    return (
      <div>
        <h1>ROOM 1</h1>
        {feedback
        ? <Feedback
            rightAnswer={flashcard.answer}
            userAnswer={userAnswer}
            feedback={feedback}
            handleNextClick={handleNextClick}
          />
        : <Question question={flashcard.question} submitAnswer={submitAnswer} />
        }
      </div>
    )
}

export default Room