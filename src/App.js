// IMPORTS
import './App.css';
import { Component } from 'react';
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { Content } from './Components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateBook } from './Components/createBook';
import { ReadBook } from './Components/readBook';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Navbar Implementation */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BookWorm</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <br />

          {/* Routing updated with router-dom V6 */}
          <Routes>
            <Route path='/' element={<Content />} exact />
            <Route path='/read' element={<ReadBook />} exact />
            <Route path='/create' element={<CreateBook />} exact />
          </Routes>


        </div>
      </Router>
    );
  }
}

export default App;
