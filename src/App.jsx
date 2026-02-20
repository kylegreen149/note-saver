import { useState, useEffect } from 'react'
import AddNotesForm from "./AddNotesForm.jsx"
import Note from "./Note.jsx"
import './App.css'

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || [{"id": 1, "note": "An apple is red"}, {"id": 2, "note": "An apple has seeds"}])
  const [newNote, setNewNote] = useState("")

  const noteCount = notes.length
  const hasNotes = noteCount > 0
  const isOverLimit = noteCount >= 10

  const handleChange = e => setNewNote(e.target.value)
  const addNote = e => {
    e.preventDefault()
    if (!newNote.trim()) return
    setNotes(prev => [...prev, {"id": crypto.randomUUID(), "note": newNote}])
    setNewNote("")
  }

  const deleteNote = id => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
  }
  // console.log(newNote)
  // console.log(notes)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  return (
    <div>
      <h1>My Notes</h1>
      <div className='summary'>
        {hasNotes ? <p>You have {noteCount} notes</p> : <p>No Notes Yet</p>}
        {isOverLimit && <p style={{color: "green", fontWeight: "900"}}>Note Taking Machine!</p>}
      </div>
      <AddNotesForm newNote={newNote} handleChange={handleChange} addNote={addNote}/>
      {notes.map(note => <Note key={note.id} note={note} deleteNote={deleteNote} />)}
    </div>
  )
}

export default App
