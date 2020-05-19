import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

function App() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setContact(prevValue => {
      //Below is the way of achieveing the aim with the help of spread operator
      return {
        ...prevValue,
        [name]: value
        //In the above statement since..prevvalue is a object so useing spread operator it is used then a certain key is override
      };

      //This is the general way of exe2cuting the the aim without spread operator
      /*  if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value
        };
      }*/
    });
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <h1>
          Hello {contact.fname} {contact.lname}
        </h1>
        <p>{contact.email}</p>
        <form>
          <input
            name="fname"
            onChange={handleChange}
            placeholder="First Name"
          />
          <input name="lname" onChange={handleChange} placeholder="Last Name" />
          <input name="email" onChange={handleChange} placeholder="Email" />
          <button className="btn btn-danger">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
