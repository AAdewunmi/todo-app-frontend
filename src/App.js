import React, {useState, useEffect} from "react";
//import axios from 'axios';
import todos from "./apis";
import Form from "./components/Form";
import Section from "./components/Sections";
import List from "./components/List";
import axios from "axios";



const appTitle = "To-Do App"

const App = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    async function fetchData(){
      const { data } = await todos.get("/todos");
      setTodoList(data);
    }
    fetchData()
  }, []);

  const addTodo = async (item) => {
    const { data }  = await todos.post("/todos", item);
    setTodoList((oldList) => [...oldList, data]);
  };

  const removeTodo = async (id) => {
    await todos.delete(`/todos/${id}`);
    setTodoList((oldList) => oldList.filter((item) => item._id !== id));
  };

    return (
      <div className="ui container center aligned">
        <Section>
          <h1>{appTitle}</h1>
        </Section>
        <Section>
          <Form addTodo={addTodo}/>
        </Section>
        <Section>
          <List removeTodoListProp={removeTodo} list={todoList}/>
        </Section>
      </div>
    );
};

export default App;