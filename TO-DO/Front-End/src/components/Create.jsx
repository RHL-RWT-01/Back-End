import React, { useState } from 'react';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');  // Added state to handle success or error messages

  const addTodo = async () => {
    const todo = { title, description };
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
      });

      if (response.ok) {
        setMessage("Todo added successfully");
        setTitle('');  // Resetting input fields
        setDescription('');
      } else {
        const errorData = await response.json();
        setMessage(`Failed to add todo: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.message}`);
    }
  };

  return (
    <>
      <input
        style={{ padding: 15, margin: 12 }}
        type="text"
        placeholder="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        style={{ padding: 15, margin: 12 }}
        type="text"
        placeholder="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button
        style={{
          backgroundColor: 'purple',
          color: 'white',
          borderRadius: 15,
          border: 0,
          width: '10%',
          cursor: 'pointer',
          padding: 15,
          margin: 20,
        }}
        onClick={addTodo}
      >
        Add Todo
      </button>
      {message && <p>{message}</p>}  {/* Display success or error message */}
    </>
  );
}

export default Create;
