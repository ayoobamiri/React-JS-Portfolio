import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { Form, FormControl, Button } from 'react-bootstrap';

import styled from 'styled-components';

// const Styles = styled.div`
//   .navbar {
//     background-color: #222;
//   }

//   a, .navbar-brand, .navbar-nav .nav-link {
//     color: #bbb;

//     &:hover {
//       color: white;
//     }
//   }
// `;

// export const NavigationBar = () => (
//   <Styles>
//     <Navbar expand="lg">
//       <Navbar.Brand href="/">M.AMIRI</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/">Home</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/about">About</Link>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link>
//               <Link to="/contact">Contact</Link>
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   </Styles >
// )


export const NavigationBar = () => (

  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#home">M-AMIRI</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Item>
        <Nav.Link>
          <Link to="/">Home</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/about">About</Link>
        </Nav.Link>
      </Nav.Item>           <Nav.Item>
        <Nav.Link>
          <Link to="/contact">Contact</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    </Navbar.Collapse>
  </Navbar>
)