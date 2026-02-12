const Note = ({note, deleteNote}) => {
    return (
        <>
            <p>{note.note}</p>
            <button onClick={() => deleteNote(note.id)}>Delete Note</button>
        </>
    )
}

export default Note