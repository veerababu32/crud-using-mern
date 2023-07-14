import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  return (
    <div>
      <h2>{!store.updateForm._id ? "Create Note:" : "Update Note:"}</h2>
      <form
        onSubmit={!store.updateForm._id ? store.createNote : store.updateNote}
      >
        <input
          onChange={
            !store.updateForm._id
              ? store.updateCreateForm
              : store.handleUpdateFieldChange
          }
          value={
            !store.updateForm._id
              ? store.createForm.title
              : store.updateForm.title
          }
          name="title"
        />
        <textarea
          onChange={
            !store.updateForm._id
              ? store.updateCreateForm
              : store.handleUpdateFieldChange
          }
          value={
            !store.updateForm._id
              ? store.createForm.body
              : store.updateForm.body
          }
          name="body"
        />
        <button type="submit">
          {!store.updateForm._id ? "Create Note" : "Update Note"}
        </button>
      </form>
    </div>
  );
}
