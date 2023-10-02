import React from "react";

const List = () => {
    return (
      <div className="ui grid">
        <div className="row">
          <div className="column five wide">Test</div>
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

export default List;