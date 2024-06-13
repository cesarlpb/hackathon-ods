import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../cards.json'; // Asegúrate de que esta ruta sea correcta

const Flashcards = () => {
    const [flashcardInput, setFlashcardInput] = useState('');
    const [flashcards, setFlashcards] = useState([]);
    const [editingFlashcardId, setEditingFlashcardId] = useState(null);
    const [newFlashcardQuestion, setNewFlashcardQuestion] = useState('');
    const [newFlashcardAnswer, setNewFlashcardAnswer] = useState('');
  

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = () => {
    try {
      console.log('Data from JSON:', data);
      if (data.cards && Array.isArray(data.cards)) {
        setFlashcards(data.cards);
        console.log('Flashcards set:', data.cards);
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  };

  const handleInputChange = (e) => {
    setFlashcardInput(e.target.value);
  };

  const handleAddFlashcard = () => {
    if (flashcardInput.trim() !== '') {
      const newFlashcard = {
        id: flashcards.length + 1,
        question: flashcardInput.trim(),
        answer: ''
      };
      setFlashcards([...flashcards, newFlashcard]);
      setFlashcardInput('');
    }
  };

  const handleDeleteFlashcard = (id) => {
    const updatedFlashcards = flashcards.filter(flashcard => flashcard.id !== id);
    setFlashcards(updatedFlashcards);
  };

    const handleEditFlashcard = (id, newQuestion, newAnswer) => {
    const updatedFlashcards = flashcards.map(flashcard => {
      if (flashcard.id === id) {
        return { ...flashcard, question: newQuestion, answer: newAnswer };
      }
      return flashcard;
    });
    setFlashcards(updatedFlashcards);
    setEditingFlashcardId(null);
    setNewFlashcardQuestion('');
    setNewFlashcardAnswer('');
  };

  const startEditingFlashcard = (id, currentQuestion, currentAnswer) => {
    setEditingFlashcardId(id);
    setNewFlashcardQuestion(currentQuestion);
    setNewFlashcardAnswer(currentAnswer);
  };

  return (
    <div id="flashcards-container">
      <header>
        <h1>Flashcards</h1>
        <Link to="/">
          <button id="goToHome">Return to home</button>
        </Link>
      </header>
      <main>
        <section id="flashcardCreation-container">
          <h2>Insert a new flashcard</h2>
          <div id="newInput">
            <input
              type="text"
              value={flashcardInput}
              onChange={handleInputChange}
              placeholder="Enter flashcard question"
            />
            <button onClick={handleAddFlashcard}>Add Flashcard</button>
          </div>
        </section>
        <section id="flashcardsDisplay">
          {flashcards.length > 0 ? (
            flashcards.map(flashcard => (
              <div className="flashcard-item" key={flashcard.id}>
                {editingFlashcardId === flashcard.id ? (
                  <div>
                    <input
                      type="text"
                      value={newFlashcardQuestion}
                      onChange={(e) => setNewFlashcardQuestion(e.target.value)}
                    />
                    <input
                      type="text"
                      value={newFlashcardAnswer}
                      onChange={(e) => setNewFlashcardAnswer(e.target.value)}
                    />
                    <button onClick={() => handleEditFlashcard(flashcard.id, newFlashcardQuestion, newFlashcardAnswer)}>Save</button>
                    <button onClick={() => { setEditingFlashcardId(null); setNewFlashcardQuestion(''); setNewFlashcardAnswer(''); }}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <p>{flashcard.question}</p>
                    <p>{flashcard.answer}</p>
                    <button onClick={() => startEditingFlashcard(flashcard.id, flashcard.question, flashcard.answer)}>Edit</button>
                    <button onClick={() => handleDeleteFlashcard(flashcard.id)}>Delete</button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No flashcards available.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Flashcards;