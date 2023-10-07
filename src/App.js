import React, {useState} from "react";
import Form from "./components/Form";
import Section from "./components/Sections";
import List from "./components/List";


const appTitle = "To-Do App"

const list = [
  { id: 1, title: "Test #1", completed: false },
  { id: 2, title: "Test #2", completed: false },
  { id: 3, title: "Test #3", completed: false },
];

const App = () => {
  const [todoList, setTodoList] = useState(list);
  const addTodo = (item) => {
    setTodoList((oldList) => [...oldList, item]);
  };
  const removeTodo = (id) => {
    setTodoList((oldList) => oldList.filter((item) => item.id !== id));
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