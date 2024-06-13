import { useEffect, useState } from 'react';
import data from '../cards.json';
import Question from '../components/Question';
import Feedback from '../components/Feedback';
import { getResponse } from '../utils/openai';
import { socket } from '../utils/socket';
import { Link } from "react-router-dom"

const Room = () => {
  const [cardNum, setCardNum] = useState(0);
  const [flashcard, setFlashcard] = useState(data.cards[cardNum]);
  const [feedback, setFeedback] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  
  const [showAddMoreMessage, setShowAddMoreMessage] = useState(false);

  const [users, setUsers] = useState(0);

  useEffect(() => {
    setFlashcard(data.cards[cardNum]);
    setShowAddMoreMessage(cardNum >= data.cards.length);
  }, [cardNum]);

  useEffect(() => {
    socket.connect();

    socket.on('connect', () => {
      console.log(socket.auth.username + 'has connected!');
      socket.auth.users += 1;
      setUsers(socket.auth.users);
    });

    socket.on('disconnect', () => {
      setUsers(users - 1);
    });
  }, []);
  
  const noMoreQuestions = async () => {
    setShowAddMoreMessage(true);
  }

  const handleNextClick = () => {
    setFeedback('');
    setCardNum(cardNum + 1);
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

  return (
    <div id="room-container">
      <header>
        <h1>ROOM 1</h1>
        <Link to="/">
          <button id="goToHome">Return to home</button>
        </Link>
        <small>Users in room: {users}</small>
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
  );
};

export default Room;