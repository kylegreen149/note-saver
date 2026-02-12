import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [notes, setNotes] = useState([{"id": 1, "note": "An apple is red"}, {"id": 2, "note": "An apple has seeds"}])
  return (
    <div>
      <h1>My Notes</h1>
      {notes.map(note => <p key={note.id}>{note.note}</p>)}
    </div>
  )
}

export default App
