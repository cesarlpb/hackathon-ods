import React from 'react';

const Index = () => {
    const items = ["Literature", "Mathematics", "History", "Technology"];
    const categories = [];

    items.forEach((item, index) => {
        index++;
        categories.push(<button className="category" id={`${index}`} key={index}><a>{item}</a></button>)
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
                    <button id="newCategory">Create new category</button>
                    <button id="newFlashCard">Create new flashcard</button>
                </div>
                <div id="userActions-container">
                    <button id="closeSession">Close session</button>
                </div>
            </aside>
        </main>
    </div>
    )
}

export default Index