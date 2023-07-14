import { useEffect } from "react";
import notesStore from "../stores/notesStore";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";

export default function NotesPage() {
  const store = notesStore();

  useEffect(() => {
    store.fetchNotes();
  }, [store]);

  return (
    <div>
      <Notes />
      <CreateForm />
    </div>
  );
}
