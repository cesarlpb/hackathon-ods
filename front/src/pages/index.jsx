import React from 'react';

const Index = () => {
    const items = ["Literatura", "Matemáticas", "Historia", "Tecnología"];
    const categories = [];

    items.forEach((item, index) => {
        categories.push(<li key={index}><a>{item}</a></li>)
    });

    return (
    <div id="home-container">
        <header>
            <h1>Sala de estudio</h1>
        </header>
        <main>
            <section id="selection-container">
                <p>Hola</p>
                {categories}
            </section>
            <aside id="creation-container">
                <button id="newCategory"></button>
                <button id="newFlashCard"></button>
            </aside>
        </main>
    </div>
    )
}

export default Index