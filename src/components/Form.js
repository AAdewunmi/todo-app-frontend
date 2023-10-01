import React, {useState} from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  };

    return (
      <form className="ui form">
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