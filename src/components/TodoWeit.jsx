import { useReducer, useEffect } from "react";
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
    default:
      return state;
  }
};

const TodoList = () => {
  const [state, dispatch] = useReducer(reduser, initialState);

  const addItem = (text) => {
    dispatch({ type: "ADD_ITEM", payload: text });
  };
  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  const editItem = (index, text) => {
    dispatch({ type: "EDIT_ITEM", payload: { index, text } });
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

  const handleEdit = (index, text) => {
    const newText = prompt("Edit item:", text);
    if (newText !== null) {
      editItem(index, newText);
    }
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" placeholder="FirstName"></input>
        <input type="text" name="lastName" placeholder="LastName"></input>
        <input type="number" name="number" placeholder="Number"></input>
        <input type="text" name="email" placeholder="Email"></input>
        <button type="submit">Submit</button>
      </form>
      Lists
      {state.items.map((item, index) => (
        <div key={index}>
          <div>{item}</div>
          <button type="submit" onClick={() => removeItem(index)}>
            Delete
          </button>
          <button type="submit" onClick={() => handleEdit(index, item)}>
            Edit
          </button>
        </div>
      ))}
    </>
  );
};
export default TodoList;
