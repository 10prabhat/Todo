import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let todoString = localStorage.getItem("TODOS");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);
  const saveToLS = () => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  };

  const handleAdd = () => {
    if (todo) {
      setTodos([
        ...todos,
        { id: uuidv4(), text: todo, isCompleted: false, ID: uuidv4() },
      ]);
      setTodo("");
      saveToLS();
    }
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = async (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const handleDelete = (e, id) => {
    let newTodo = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodo);
  };
  const handleEdit = (e, id) => {
    let t = todos.filter((item) => {
      return item.id === id;
    });
    setTodo(t[0].text);
    handleDelete(e, id);
  };
  return (
    <div className="flex flex-col justify-center py-4">
      <div className="todo_container w-1/2 m-auto mt-24 bg-indigo-200 rounded-xl px-4 py-5">
        <div className="todo_head ">
          <h2 className="font-bold text-4xl text-center text-slate-700 pb-2">
            YOUR TODOS
          </h2>
          <div className="todo_head_input flex pb-4 justify-between gap-8">
            <input
              type="text"
              className="w-full text-xl px-2 rounded-lg h-10"
              placeholder="Enter here"
              value={todo}
              onChange={handleChange}
            />
            <button
              onClick={handleAdd}
              className="font-semibold text-lg hover:bg-indigo-900 bg-indigo-600 text-white px-3 rounded-lg py-1"
            >
              Add
            </button>
          </div>
        </div>
        {todos.map((item) => {
          return (
            <div key={item.id} className="todo_body py-2">
              <div
                className="todo_item bg-indigo-300 rounded-lg px-2 md:flex gap-10 justify-between py-3

            "
              >
                <div className="text flex items-center gap-1 justify-center">
                  <input
                    id={item.ID}
                    name={item.id}
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={handleCheckbox}
                  />
                  <label
                    htmlFor={item.ID}
                    className={
                      item.isCompleted
                        ? "line-through leading-5 cursor-pointer"
                        : "leading-5  cursor-pointer"
                    }
                  >
                    {item.text}
                  </label>
                </div>
                <div className="btn_items md:justify-center items-center flex flex-wrap md:flex-nowrap justify-evenly md:gap-3 bg-inherit">
                  <button
                    onClick={(e) => {
                      handleEdit(e, item.id);
                    }}
                    className=" font-semibold text-lg hover:bg-indigo-900 bg-indigo-600 text-white px-3 rounded-lg py-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                    className="font-semibold text-lg hover:bg-indigo-900 bg-indigo-600 text-white px-3 rounded-lg py-1"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
