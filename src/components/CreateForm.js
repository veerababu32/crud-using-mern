import { FloatingLabel, Form } from "react-bootstrap";
import notesStore from "../stores/notesStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateForm() {
  const store = notesStore();
  const notify = (val) => toast(val);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!store.updateForm._id) {
      store.createNote();
      notify("Note Created!!!");
    } else {
      store.updateNote();
      notify("Note Updated!!!");
    }
  };

  return (
    <div className="create-note">
      <h3>{!store.updateForm._id ? "Create Note:" : "Update Note:"}</h3>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel
          label="Title"
          controlId="validationCustom01"
          className="mb-3"
        >
          <Form.Control
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
            as="input"
            type="text"
            placeholder="Title"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          label="Description"
          controlId="validationCustom02"
          className="mb-3"
        >
          <Form.Control
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
            as="textarea"
            style={{ height: "100px" }}
            placeholder="Description"
            required
          />
        </FloatingLabel>
        <button type="submit" className="btn btn-primary">
          {!store.updateForm._id ? "Create Note" : "Update Note"}
        </button>
        <ToastContainer />
      </Form>
    </div>
  );
}
