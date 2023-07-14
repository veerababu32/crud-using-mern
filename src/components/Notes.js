import notesStore from "../stores/notesStore";

export default function Notes() {
  const store = notesStore();

  return (
    <div>
      <h2>Notes:</h2>
      {store.notes &&
        store.notes.map((note) => {
          return (
            <div key={note._id}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <button onClick={() => store.deleteNote(note._id)}>
                Delete Note
              </button>
              <button onClick={() => store.toggleUpdate(note)}>
                Update Note
              </button>
            </div>
          );
        })}
    </div>
  );
}
