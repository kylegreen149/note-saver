import { useState, useEffect } from 'react'
import AddNotesForm from "./AddNotesForm.jsx"
import './App.css'
import { resumeAndPrerenderToNodeStream } from 'react-dom/static'

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || [{"id": 1, "note": "An apple is red"}, {"id": 2, "note": "An apple has seeds"}])
  const [newNote, setNewNote] = useState("")

  const handleChange = e => setNewNote(e.target.value)
  const addNote = e => {
    e.preventDefault()
    setNotes(prev => [...prev, {"id": crypto.randomUUID(), "note": newNote}])
    setNewNote("")
  }
  // console.log(newNote)
  console.log(notes)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  return (
    <div>
      <h1>My Notes</h1>
      <AddNotesForm newNote={newNote} handleChange={handleChange} addNote={addNote}/>
      {notes.map(note => <p key={note.id}>{note.note}</p>)}
    </div>
  )
}

export default App
