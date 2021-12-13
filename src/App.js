// IMPORTS
import './App.css';
import { Component } from 'react';
import { ContentPage } from './Components/contentPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreateBook } from './Components/createBook';
import { ReadBook } from './Components/readBook';
import { EditBook } from './Components/editBook';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* Navbar Implementation */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BookWorm</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Reception</Nav.Link>
              <Nav.Link href="/read">Library</Nav.Link>
              <Nav.Link href="/create">Add Books</Nav.Link>
            </Nav>
          </Navbar>
          <br />

          {/* Routing Implementation */}
          <Switch>
            <Route path='/' component={ContentPage} exact />
            <Route path='/read' component={ReadBook} exact />
            <Route path='/create' component={CreateBook} exact />
            <Route path='/edit/:id' component={EditBook} exact />
          </Switch>


        </div>
      </Router>
    );
  }
}

export default App;
