import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import NotesPage from "./pages/NotesPage";
import LoginSignup from "./pages/LoginSignup";
import "./App.css";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginSignup />,
  },
  {
    path: "/",
    element: (
      <RequireAuth>
        <NotesPage />
      </RequireAuth>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
