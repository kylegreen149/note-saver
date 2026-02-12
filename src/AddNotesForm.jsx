const AddNotesForm = ({newNote, handleChange, addNote}) => {
    return (
        <form onSubmit={addNote}>
            <textarea name="note" placeholder="Enter a new Note..." onChange={handleChange} value={newNote}></textarea>
            <button type="submit">Add Note</button>
        </form>
    )
}

export default AddNotesForm