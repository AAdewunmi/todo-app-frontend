import React, {useState} from "react";

const Todo = ({ title }) => {
    const[isEditing, setIsEditing] = useState(false);
    const[value, setValue] = useState(title);
    const [tempValue, setTempValue] = useState(title);

    const handleDivDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputKeyDown = (e) => {
        const key = e.keyCode;
        if (key === 13) {
          setValue(tempValue);
          setIsEditing(false);
        }else if (key === 27) {
          setTempValue(value);
          setIsEditing(false);
        }
    };
    
    const handleInputOnChange = (e) => {
        setTempValue(e.target.value);
    }

    return isEditing ? (
      <div className="row" onDoubleClick={handleDivDoubleClick}>
        <div className="column seven wide">
          <div className="ui input fluid">
            <input 
            onChange={handleInputOnChange}
            onKeyDown={handleInputKeyDown}
            autoFocus={true}
            value = {tempValue}
            />
          </div>
        </div>
      </div>
    ) : (
      <div className="row" onDoubleClick={handleDivDoubleClick}>
        <div className="ui grid center aligned">
          <div className="column five wide">
            <h2>{value}</h2>
          </div>
          <div className="column one wide">
            <button className="ui button circular icon green">
              <i className="white check icon"></i>
            </button>
          </div>
          <div className="column one wide">
            <button className="ui button circular icon red">
              <i className="white remove icon"></i>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Todo;