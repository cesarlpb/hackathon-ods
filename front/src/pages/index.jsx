import React from 'react';
import {Link} from 'react-router-dom';

const Index = () => {
    const items = ["Geography", "Mathematics", "History", "Technology"];
    const categories = [];

    items.forEach((item, index) => {
        index++;
        categories.push(<Link to="/room"><button className="category" id={`${index}`} key={index}><a>{item}</a></button></Link>)
    });

  return (
    <div id="home-container">
        <header>
            <h1 id="main-title">Room studio</h1>
        </header>
        <main>
            <section id="selection-container">
                {categories}
            </section>
            <aside id="aside-container">
                <div id="create-container">
                    <Link to="/categories">
                        <button id="newCategory">Create new category</button>
                    </Link>
                    <Link to="/flashcards">
                        <button id="newFlashCard">Create new flashcard</button>
                    </Link>
                </div>
                <div id="createRoom-container">
                    <button id="newRoom" disabled={true}>Create new room &#40;play online&#41;</button>
                    <p id="disclaimer">Not yet available!</p>
                </div>
                {/* <div id="userActions-container">
                    <button id="closeSession">Close session</button>
                </div> */}
            </aside>
        </main>
    </div>
  )
};

export default Index;
