import React from "react";
import Todo from "./Todo";

const List = ({ list, removeTodoListProp }) => {
  const renderedList = list.map((item) => (
    <Todo
      title={item.title}
      completed={item.completed}                                   
      removeTodoItemProp={(e) => removeTodoListProp(item._id)}
      key={item.title}
    />
  ));
    return (
      <div className="">
        {renderedList}
      </div>
    );
};

export default List;