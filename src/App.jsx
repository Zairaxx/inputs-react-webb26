import { useState } from 'react'
import './App.css'

function App() {
  const [students,setStudents] = useState([]);
  const [namn,setNamn] = useState("");

  function addStudent(){
    setStudents([...students, namn]);
  }

  return (
    <>
      <h1>Elevlista</h1>
      <h2>Ny elev: {namn}</h2>
      <input type="text" onChange={(e) => setNamn(e.target.value)}/>
      <button onClick={addStudent}>Lägg till elev</button>

      {/* W ? T : F */}
      {students.length > 0 ? <ul>{students.map(student => <li>{student}</li>)}</ul> : <p>Listan är tom!</p>}
    </>
  )
}

export default App
