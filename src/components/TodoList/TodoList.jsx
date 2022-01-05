import { InputGroup, FormControl, Button, ListGroup, Badge } from "react-bootstrap";
import { useState } from 'react';

export default function TodoList(props){
    const [inputTodo, setInputTodo] = useState();
    const [todos, setTodos] = useState([]);

    let displayTodos = todos.map(todo=>{
        return(
             <ListGroup.Item>{todo}</ListGroup.Item>
        );
    })
    
    function add(){
        if(inputTodo.trim().length === 0) return null;

        let tmp = [...todos];
        tmp.push(inputTodo.trim());
        setTodos(tmp);
        setInputTodo("");
    }

    return (
        <div>
            <h2>{props.nom} <Badge pill bg="primary">{todos.length}</Badge></h2>
            <hr />
             <InputGroup className="mb-3">
                <FormControl
                    placeholder="Ex : Ecouter le cours de React"
                    value={inputTodo}
                    onChange={(e)=>setInputTodo(e.target.value)}
                />
                <Button variant="outline-info" onClick={add}>
                    Ajouter
                </Button>
            </InputGroup>

            <ListGroup variant="flush">
               {displayTodos}
            </ListGroup>
        </div>
        
    )
}