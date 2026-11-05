function TodoList({todos,toggleTodo}){

    return(<ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.completed ? "✅ Klar" : "⏳ Pågår"}</p>
            <button onClick={() => toggleTodo(todo.id)}>Växla status</button>
          </li>
        ))}
      </ul>)
}

export default TodoList