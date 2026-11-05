import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  //Alla våra todos
  const [todos, setTodos] = useState([]);

  const addTodo = (title,description) => {
    const newTodo = { id: Date.now(), title, description, completed: false };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <main>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </main>
  );
}

export default App;