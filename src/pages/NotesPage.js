import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas, Row, Col } from "react-bootstrap";
import notesStore from "../stores/notesStore";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import authStore from "../stores/authStore";

export default function NotesPage() {
  const store = notesStore();
  const auth = authStore();
  const navigate = useNavigate();

  useEffect(() => {
    store.fetchNotes();
    // eslint-disable-next-line
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout();
    navigate("/login");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-primary header">
        <Container fluid>
          <Link to={"/"}>
            <h2>CRUD</h2>
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbar-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbar-expand-lg">
                CRUD
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-between flex-grow-1">
                <Link to={"/"}>Home</Link>
                <Link onClick={handleLogout}>Logout</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Container fluid className="py-3">
        <Container fluid>
          <Row>
            <Col>
              <CreateForm />
            </Col>
            <Col>
              <Notes />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
