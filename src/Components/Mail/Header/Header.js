import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../Store/Reducers/AuthReducer";
import { emailActions } from "../../Store/Reducers/EmailReducer";
import "./Header.css";

function Header() {
  const dispatcher = useDispatch();
  const navigator = useNavigate();
  const onLogout = () => {
    dispatcher(authActions.onLogout());
    dispatcher(emailActions.onLogoutEmail());
    navigator("/login");
  };
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#" className="navbarHeading">
          Gmail
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="searchnavbar">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Button variant="info" className="ms-5" onClick={onLogout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
