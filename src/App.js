import React from "react";
import Form from "./components/Form";


const appTitle = "To-Do App"

const App = () => {
    return <div className="ui container center aligned">
        <h1>{appTitle}</h1>
        <Form />
      </div>;
};

export default App;