import './App.css';
import NavBarApp from './components/NavBarApp/NavBarApp';
import TodoList from './components/TodoList/TodoList';
import HelloWorld from './components/HelloWorld/HelloWorld';
import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  // let nom = "Stone free";
  const [nom, setNom] = useState("Stone Free Jolyne")
  
  return (
    <div className="App">
      <NavBarApp />

      <Container>
        <Row>
          <Col md={12} className="mt-3">
            <h1>TD : Todolist</h1>
            <hr />
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <TodoList nom="Personnages" />
          </Col>

          <Col md={4}>
            <TodoList nom="Stands" />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
