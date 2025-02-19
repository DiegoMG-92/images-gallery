import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "black",
 
};

const Header = (props) => {

  return (
    <Navbar style={navbarStyle} variant="dark">
        <Container>
            <Navbar.Brand href="/"> {props.title} </Navbar.Brand>
        </Container> 
    </Navbar>
  );
}

export default Header;  // export the Header component