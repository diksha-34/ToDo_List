import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask, editTask } from './redux/actions';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button, InputGroup, FormControl, ListGroup } from 'react-bootstrap';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const list = useSelector(state => state.list);
  const dispatch = useDispatch();

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput !== '') {
      dispatch(addTask(userInput));
      setUserInput('');
    }
  };

  const deleteItem = (id) => {
    dispatch(deleteTask(id));
  };

  const editItem = (index) => {
    const editedTodo = prompt('Edit the todo:');
    if (editedTodo !== null && editedTodo.trim() !== '') {
      dispatch(editTask(index, editedTodo));
    }
  };

  return (
<Container>
  <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem', fontWeight: 'bolder' }}>
    TODO LIST
  </Row>
  <hr />
  <Row>
    <Col md={{ span: 5, offset: 4 }}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="add item . . . "
          size="lg"
          value={userInput}
          onChange={(e) => updateInput(e.target.value)} 
          aria-label="add something"
          aria-describedby="basic-addon2"
        />
        <InputGroup>
          <Button variant="dark" className="mt-2 mr-2" onClick={addItem}>
            ADD
          </Button>
        </InputGroup>
      </InputGroup>
    </Col>
  </Row>
  <Row>
    <Col md={{ span: 5, offset: 4 }}>
      <ListGroup>
        {list.map((item, index) => (
          <div key={index}>
            <ListGroup.Item key={index} variant="dark" action style={{ display: 'flex', justifyContent: 'space-between' }}>
              {item.value}
              <span>
                <Button style={{ marginRight: '10px' }} variant="light" onClick={() => deleteItem(item.id)}>
                  Delete
                </Button>
                <Button variant="light" onClick={() => editItem(index)}>
                  Edit
                </Button>
              </span>
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </Col>
  </Row>
</Container>

  );
};

export default App;
