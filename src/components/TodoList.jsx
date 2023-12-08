import { useReducer, useEffect, useState } from "react";
import "./TodoList.css";
const initialState = {
  items: JSON.parse(localStorage.getItem("todoList")) || [],
};

const reduser = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload),
      };

    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload.index ? action.payload.text : item
        ),
      };
    case "START_EDIT":
      return {
        ...state,
        editingIndex: action.payload.index,
        editingText: action.payload.text,
      };
    case "SAVE_EDIT":
      const newItems = [...state.items];
      newItems[state.editingIndex] = state.editingText;
      return {
        ...state,
        items: newItems,
        editingIndex: -1,
        editingText: "",
      };
    default:
      return state;
  }
};

const TodoList = () => {
  const [state, dispatch] = useReducer(reduser, initialState);
  const [editingText, setEditingText] = useState("");

  const addItem = (text) => {
    dispatch({ type: "ADD_ITEM", payload: text });
  };
  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  const editItem = (index, text) => {
    dispatch({ type: "EDIT_ITEM", payload: { index, text } });
  };
  const startEdit = (index, text) => {
    dispatch({ type: "START_EDIT", payload: { index, text } });
  };
  const saveEdit = (index) => {
    dispatch({ type: "SAVE_EDIT" });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(state.items));
  }, [state.items]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = event.target.task.value.trim();
    const lastName = event.target.lastName.value.trim();
    const number = event.target.number.value.trim();
    const email = event.target.email.value.trim();

    if (firstName !== "" && lastName !== "" && number !== "" && email !== "") {
      const newItem = `${firstName} ${lastName} ${number} ${email}`;
      addItem(newItem);
      event.target.reset();
    }
  };

  // const handleEdit = (index, text) => {
  //   const newText = prompt("Edit item:", text);
  //   if (newText !== null) {
  //     editItem(index, newText);
  //   }
  // };

  const handleEdit = (index, text) => {
    dispatch({ type: "START_EDIT", payload: { index, text } });
  };

  return (
    <div className="Cards">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="FirstName"></input>
        <input type="text" name="lastName" placeholder="LastName"></input>
        <input type="number" name="number" placeholder="Number"></input>
        <input type="text" name="email" placeholder="Email"></input>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {state.items.map((item, index) => (
        <div className="Cards__info" key={index}>
          {state.editingIndex === index ? (
            <div className="box">
              <input
                type="text"
                value={state.editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button className="btn" onClick={() => saveEdit(index)}>
                Save
              </button>
            </div>
          ) : (
            <div className="userInfo"> {item}`</div>
          )}
          <button
            className="delete"
            type="submit"
            onClick={() => removeItem(index)}
          >
            Delete
          </button>
          <button
            className="edit"
            type="submit"
            onClick={() => handleEdit(index, item)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
