import React from 'react';

const Index = () => {
  const items = ['Literature', 'Mathematics', 'History', 'Technology'];
  const categories = [];

  items.forEach((item, index) => {
    index++;
    categories.push(
      <button className="category" idName={`id-${index}`} key={index}>
        <a>{item}</a>
      </button>
    );
  });

  return (
    <div id="home-container">
      <header>
        <h1>Room studio</h1>
      </header>
      <main>
        <section id="selection-container">{categories}</section>
        <aside id="creation-container">
          <button id="newCategory">Create new category</button>
          <button id="newFlashCard">Create new flashcard</button>
        </aside>
      </main>
    </div>
  );
};

export default Index;
