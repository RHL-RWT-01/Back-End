import { useState, useEffect } from 'react';
import Create from './components/Create';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Failed to fetch:', error));
  }, []);  // The empty array ensures the effect runs only once when the component mounts

  return (
    <>
      <h1>TO-DO</h1>
      <Create />
      <Todos todos={todos} />
    </>
  );
}

export default App;
