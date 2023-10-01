import React from "react";

const Form = () => {
    return (
      <form className="ui form">
        <div className="ui grid">
          <div className="row">
            <div className="column five wide">
              <input type="text" />
            </div>
            <div className="column one wide">
              <button type="submit" className="ui button circular icon"><i className="plus icon"></i></button>
            </div>
          </div>
        </div>
      </form>
    );
};

export default Form;