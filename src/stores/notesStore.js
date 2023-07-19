import { create } from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: [],

  createForm: {
    title: "",
    body: "",
  },

  updateForm: {
    _id: null,
    title: "",
    body: "",
  },

  fetchNotes: async () => {
    const res = await axios.get("/notes");
    set({ notes: res.data.notes });
    // console.log(res);
  },

  updateCreateForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createNote: async (e) => {
    // e.preventDefault();
    const { createForm, notes } = notesStore.getState();
    const res = await axios.post("/notes", createForm);
    set({
      notes: [...notes, res.data.note],
      createForm: { title: "", body: "" },
    });
  },

  deleteNote: async (id) => {
    await axios.delete(`/notes/${id}`);
    const { notes } = notesStore.getState();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    set({ notes: newNotes });
  },

  handleUpdateFieldChange: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: ({ _id, title, body }) => {
    set({ updateForm: { _id, title, body } });
  },

  updateNote: async (e) => {
    // e.preventDefault();
    const {
      updateForm: { _id, title, body },
      notes,
    } = notesStore.getState();

    const res = await axios.put(`/notes/${_id}`, {
      title,
      body,
    });

    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) => {
      return note._id === _id;
    });
    newNotes[noteIndex] = res.data.note;

    set({ notes: newNotes, updateForm: { _id: null, title: "", body: "" } });
  },
}));

export default notesStore;
