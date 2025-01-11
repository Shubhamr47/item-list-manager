import React, { useState } from 'react';
import './App.css'; // Import the CSS stylesheet

function ItemListManager() {
  const [items, setItems] = useState([]); // Manage the list of items using useState
  const [newItem, setNewItem] = useState(''); // Manage the input field's value

  const handleAddItem = () => {
    if (newItem.trim() !== '') { // Prevent adding empty items
      setItems([...items, newItem]); // Add new item to the list
      setNewItem(''); // Clear the input field
    }
  };

  return (
    <div className="App" style={{ fontFamily: 'sans-serif', padding: '20px' }}> {/* Basic styling */}
      <h1>Item List Manager</h1>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={handleAddItem} style={{ padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Add Item
        </button>
      </div>
    </div>
  );
}

export default ItemListManager;