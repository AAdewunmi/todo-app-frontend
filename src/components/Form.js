import React, {useState} from "react";

const Form = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  };
  const handleFormSubit = (e) => {
      e.preventDefault();
      addTodo({title: inputValue, completed: false});
      setInputValue(" ");
  };

    return (
      <form className="ui form" onSubmit={handleFormSubit}>
        <div className="ui grid center aligned">
          <div className="row">
            <div className="column five wide">
              <input 
              value={inputValue}
              onChange={handleInputChange}
              type="text" 
              placeholder="Enter To Do ... "/>
            </div>
            <div className="column one wide">
              <button type="submit" className="ui button circular icon green"><i className="white plus icon"></i></button>
            </div>
          </div>
        </div>
      </form>
    );
};

export default Form;