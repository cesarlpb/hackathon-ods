import { useEffect, useState } from "react"
import data from '../cards.json'
import Question from "../components/Question"
import Feedback from "../components/Feedback"
import { getResponse } from "../utils/openai"
import { Link } from "react-router-dom"

const Room = () => {
    const [cardNum, setCardNum] = useState(0)
    const [flashcard, setFlashcard] = useState(data.cards[cardNum])
    const [feedback, setFeedback] = useState('')
    const [userAnswer, setUserAnswer] = useState('')
    const [showAddMoreMessage, setShowAddMoreMessage] = useState(false);

    useEffect(() => {
      setFlashcard(data.cards[cardNum]);
      setShowAddMoreMessage(cardNum >= data.cards.length);
  }, [cardNum]);

  const handleNextClick = () => {
          setCardNum(cardNum + 1);
          setFeedback('');
          setUserAnswer('');
  };

    const submitAnswer = async (input) => {
      if (!input) return;
      const feedback = await getResponse(
        flashcard.question,
        flashcard.answer,
        input
      );
      setUserAnswer(input);
      setFeedback(feedback);
    };

    const noMoreQuestions = async () => {
      setShowAddMoreMessage(true);
    }

    return (
      <div id="room-container">
          <header>
            <h1>ROOM 1</h1>
            <Link to="/">
              <button id="goToHome">Return to home</button>
            </Link>
          </header>
          <main>      
            <div id="question-container">
              {cardNum > data.cards.length - 1 ? (
                (showAddMoreMessage && (
                    <div id="add-more-message">
                        <p>There are no more cards left. Do you want to add more?</p>
                        <Link to="/flashcards">Add More Flashcards</Link>
                    </div>
                ))
               ) : (
              (feedback
                ? <Feedback
                    rightAnswer={flashcard.answer}
                    userAnswer={userAnswer}
                    feedback={feedback}
                    handleNextClick={handleNextClick}
                    noMoreQuestions={noMoreQuestions}
                  />
                : <Question question={flashcard.question} submitAnswer={submitAnswer} />
              ))}
            </div>

          </main>
      </div>

    )
}

export default Room