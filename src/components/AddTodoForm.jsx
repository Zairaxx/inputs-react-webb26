import { useState } from "react";

function AddTodoForm({addTodo}){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

    return(
      <>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={() => addTodo(title,description)}>Lägg till</button>
      </>
    )
}

export default AddTodoForm