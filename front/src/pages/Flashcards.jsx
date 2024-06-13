import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Flashcards = () => {
  const [flashcardInput, setFlashcardInput] = useState('');
  const [flashcards, setFlashcards] = useState([
    {
      "id": 1,
      "title": "Flashcard 1",
      "questions": [
        "What year was Treasure Island published?",
        "What genre does Treasure Island belong to?"
      ]
    },
    {
      "id": 2,
      "title": "Flashcard 2",
      "questions": [
        "What are some applications of mathematics in daily life?",
        "Name some famous mathematicians."
      ]
    },
    {
      "id": 3,
      "title": "Flashcard 3",
      "questions": [
        "What are the causes of World War II?",
        "What were the major events of World War II?"
      ]
    },
    {
      "id": 4,
      "title": "Flashcard 4",
      "questions": [
        "What are the latest advancements in technology?",
        "How has technology impacted society?"
      ]
    }
  ]);
  const [editingFlashcardId, setEditingFlashcardId] = useState(null);
  const [newFlashcardTitle, setNewFlashcardTitle] = useState('');
  const [newFlashcardQuestions, setNewFlashcardQuestions] = useState(['', '']);

  const handleInputChange = (e) => {
    setFlashcardInput(e.target.value);
  };

  const handleAddFlashcard = () => {
    if (flashcardInput.trim() !== '') {
      const newFlashcard = {
        id: flashcards.length + 1,
        title: flashcardInput.trim(),
        questions: []
      };
      setFlashcards([...flashcards, newFlashcard]);
      setFlashcardInput('');
    }
  };

  const handleDeleteFlashcard = (id) => {
    const updatedFlashcards = flashcards.filter(flashcard => flashcard.id !== id);
    setFlashcards(updatedFlashcards);
  };

  const handleEditFlashcard = (id, newTitle, newQuestions) => {
    const updatedFlashcards = flashcards.map(flashcard => {
      if (flashcard.id === id) {
        return { ...flashcard, title: newTitle, questions: newQuestions };
      }
      return flashcard;
    });
    setFlashcards(updatedFlashcards);
    setEditingFlashcardId(null);
    setNewFlashcardTitle('');
    setNewFlashcardQuestions(['', '']);
  };

  const startEditingFlashcard = (id, currentTitle, currentQuestions) => {
    setEditingFlashcardId(id);
    setNewFlashcardTitle(currentTitle);
    setNewFlashcardQuestions(currentQuestions);
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
                placeholder="Enter flashcard title"
                />
                <button onClick={handleAddFlashcard}>Add Flashcard</button>
            </div>
        </section>
        <section id="flashcardsDisplay">
            {flashcards.map(flashcard => (
            <div className="flashcard-item" key={flashcard.id}>
                {editingFlashcardId === flashcard.id ? (
                <div>
                    <input
                    type="text"
                    value={newFlashcardTitle}
                    onChange={(e) => setNewFlashcardTitle(e.target.value)}
                    />
                    <input
                    type="text"
                    value={newFlashcardQuestions[0]}
                    onChange={(e) => setNewFlashcardQuestions([e.target.value, newFlashcardQuestions[1]])}
                    />
                    <input
                    type="text"
                    value={newFlashcardQuestions[1]}
                    onChange={(e) => setNewFlashcardQuestions([newFlashcardQuestions[0], e.target.value])}
                    />
                    <button onClick={() => handleEditFlashcard(flashcard.id, newFlashcardTitle, newFlashcardQuestions)}>Save</button>
                    <button onClick={() => { setEditingFlashcardId(null); setNewFlashcardTitle(''); setNewFlashcardQuestions(['', '']); }}>Cancel</button>
                </div>
                ) : (
                <div>
                    <p>{flashcard.title}</p>
                    <ul>
                    {flashcard.questions.map((question, index) => (
                        <li key={index}>{question}</li>
                    ))}
                    </ul>
                    <button onClick={() => startEditingFlashcard(flashcard.id, flashcard.title, flashcard.questions)}>Edit</button>
                    <button onClick={() => handleDeleteFlashcard(flashcard.id)}>Delete</button>
                </div>
                )}
            </div>
            ))}
        </section>
      </main>
      
    </div>
  );
};

export default Flashcards;