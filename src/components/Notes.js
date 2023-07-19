import { useEffect, useState } from "react";
import notesStore from "../stores/notesStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Notes() {
  const store = notesStore();
  const [noteColors, setNoteColors] = useState([]);
  const notify = (val) => toast(val);

  const generateRandomColor = () => {
    // Generate random RGB values for a light color
    const r = Math.floor(Math.random() * 128) + 128;
    const g = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;

    // Create the color string in RGB format
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    if (store.notes) {
      // Generate colors for existing note cards
      const existingColors = noteColors.slice(0, store.notes.length);

      // Generate a random color for each new note card
      const newColors = Array(store.notes.length - existingColors.length)
        .fill()
        .map(() => generateRandomColor());

      // Combine existing and new colors
      const colors = [...existingColors, ...newColors];
      setNoteColors(colors);
    }
  }, [store.notes]);

  const handleDeleteNote = (note) => {
    store.deleteNote(note._id);
    notify("Note Deleted!!!");
  };

  return (
    <div className="note">
      <h3>Notes:</h3>
      <div className="note-card">
        {store.notes.length === 0 ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <h4 className="text-primary">Add Notes...</h4>
          </div>
        ) : (
          store.notes.map((note, index) => {
            return (
              <div
                key={note._id}
                className="note-cards"
                style={{
                  backgroundColor: noteColors[index],
                }}
              >
                <h4>{note.title}</h4>
                <p>{note.body}</p>
                <div className="d-flex justify-content-end gap-2">
                  <button
                    onClick={() => handleDeleteNote(note)}
                    className="btn btn-danger"
                  >
                    Delete Note
                  </button>
                  <button
                    onClick={() => store.toggleUpdate(note)}
                    className="btn btn-success"
                  >
                    Update Note
                  </button>
                </div>
                <ToastContainer />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
