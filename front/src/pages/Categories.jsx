import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Categories = () => {
  const [categoryInput, setCategoryInput] = useState('');
  const [categories, setCategories] = useState([
    { id: 1, name: "Geography" },
    { id: 2, name: "Mathematics" },
    { id: 3, name: "History" },
    { id: 4, name: "Technology" }
  ]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleInputChange = (e) => {
    setCategoryInput(e.target.value);
  };

  const handleAddCategory = () => {
    if (categoryInput.trim() !== '') {
      const newCategory = {
        id: categories.length + 1,
        name: categoryInput.trim()
      };
      setCategories([...categories, newCategory]);
      setCategoryInput('');
    }
  };

  const handleDeleteCategory = (id) => {
    const updatedCategories = categories.filter(category => category.id !== id);
    setCategories(updatedCategories);
  };

  const handleEditCategory = (id, newName) => {
    const updatedCategories = categories.map(category => {
      if (category.id === id) {
        return { ...category, name: newName };
      }
      return category;
    });
    setCategories(updatedCategories);
    setEditingCategoryId(null);
    setNewCategoryName('');
  };

  const startEditingCategory = (id, currentName) => {
    setEditingCategoryId(id);
    setNewCategoryName(currentName);
  };

  return (
    <div id="categories-container">
      <header>
        <h1>Categories</h1>
        <Link to="/">
            <button id="goToHome">Return to home</button>
        </Link>
      </header>
      <main>
            <section id="categoryCreation-container">
            <h2>Insert a new category</h2>
            <div id="newInput">
                <input
                type="text"
                value={categoryInput}
                onChange={handleInputChange}
                placeholder="Enter category name"
                />
                <button onClick={handleAddCategory}>Add Category</button>
            </div>
        </section>
        <section id="categoriesDisplay">
            {categories.map(category => (
            <div className="category-item" key={category.id}>
                {editingCategoryId === category.id ? (
                <div>
                    <input
                    type="text"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    />
                    <button onClick={() => handleEditCategory(category.id, newCategoryName)}>Save</button>
                    <button onClick={() => { setEditingCategoryId(null); setNewCategoryName(''); }}>Cancel</button>
                </div>
                ) : (
                <div>
                    <p>{category.name}</p>
                    <button onClick={() => startEditingCategory(category.id, category.name)}>Edit</button>
                    <button onClick={() => handleDeleteCategory(category.id)}>Delete</button>
                </div>
                )}
            </div>
            ))}
        </section>
      </main>
      
    </div>
  );
};

export default Categories;