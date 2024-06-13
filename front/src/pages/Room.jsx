import { useEffect, useState } from 'react';
import data from '../cards.json';
import Question from '../components/Question';
import Feedback from '../components/Feedback';
import { getResponse } from '../utils/openai';
import { socket } from '../utils/socket';

const Room = () => {
  const [cardNum, setCardNum] = useState(0);
  const [flashcard, setFlashcard] = useState(data.cards[cardNum]);
  const [feedback, setFeedback] = useState('');
  const [userAnswer, setUserAnswer] = useState('');

  const [users, setUsers] = useState(0);

  useEffect(() => {
    setFlashcard(data.cards[cardNum]);
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
    <div>
      <h1>ROOM 1</h1>
      <small>Users in room: {users}</small>
      {feedback ? (
        <Feedback
          rightAnswer={flashcard.answer}
          userAnswer={userAnswer}
          feedback={feedback}
          handleNextClick={handleNextClick}
        />
      ) : (
        <Question question={flashcard.question} submitAnswer={submitAnswer} />
      )}
    </div>
  );
};

export default Room;
