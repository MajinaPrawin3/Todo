import React from "react";
import checked_icon from "../assets/checked.png";
import unchecked_icon from "../assets/unchecked.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <>
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex items-center my-3 gap-2"
      >
        <div className="flex flex-1 items-center cursor-pointer">
          <img
            src={isComplete ? checked_icon : unchecked_icon}
            className="w-7"
            alt=""
          />
          <p
            className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
              isComplete ? "line-through" : ""
            }`}
          >
            {" "}
            {text}{" "}
          </p>
        </div>
        <img
          onClick={() => {
            deleteTodo(id);
          }}
          src={delete_icon}
          className="w-4"
          alt=""
        />
      </div>
    </>
  );
};

export default TodoItems;
