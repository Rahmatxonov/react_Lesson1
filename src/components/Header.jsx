import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";
import "./Modal.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("todos");
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [newUser, setNewUser] = useState({
    username: "",
    lastname: "",
    phone: "",
  });
  const [newPostText, setNewPostText] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users?_limit=10"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Foydalanuvchilar ma'lumoti yuklanmadi:", error);
      }
    };

    fetchUsers();
  }, []);

  const openModal = (tab) => {
    setCurrentTab(tab);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTextChange = (e) => {
    if (currentTab === "todos") {
      setTodoText(e.target.value);
    } else if (currentTab === "posts") {
      setNewPostText(e.target.value);
    }
  };

  const handleUserInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateTodo = () => {
    if (todoText.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: todoText,
        completed: false,
        user: newUser,
      };

      setTodos([...todos, newTodo]);
      setTodoText("");
      setNewUser({
        username: "",
        lastname: "",
        phone: "",
      });
      closeModal();
    }
  };

  const handleCreatePost = () => {
    if (newPostText.trim() !== "") {
      const newPost = {
        id: posts.length + 1,
        title: newPostText,
        user: newUser,
      };

      setPosts([...posts, newPost]);
      setNewPostText("");
      setNewUser({
        username: "",
        lastname: "",
        phone: "",
      });
      closeModal();
    }
  };

  const renderModalContent = () => {
    if (currentTab === "todos") {
      return (
        <>
          <h2>Create Todo</h2>
          <div className="user-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={newUser.username}
              onChange={handleUserInputChange}
            />
          </div>
          <div className="user-input">
            <label htmlFor="lastname">Lastname:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={newUser.lastname}
              onChange={handleUserInputChange}
            />
          </div>
          <div className="user-input">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={newUser.phone}
              onChange={handleUserInputChange}
            />
          </div>
          <input
            type="text"
            value={todoText}
            onChange={handleTextChange}
            placeholder="Enter text..."
          />
          <button className="create-todo" onClick={handleCreateTodo}>
            Create Todo
          </button>
        </>
      );
    } else if (currentTab === "posts") {
      return (
        <>
          <h2>Create Post</h2>
          <div className="user-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={newUser.username}
              onChange={handleUserInputChange}
            />
          </div>
          <div className="user-input">
            <label htmlFor="lastname">Lastname:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={newUser.lastname}
              onChange={handleUserInputChange}
            />
          </div>
          <div className="user-input">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={newUser.phone}
              onChange={handleUserInputChange}
            />
          </div>
          <input
            type="text"
            value={newPostText}
            onChange={handleTextChange}
            placeholder="Enter post title..."
          />
          <button className="create-todo" onClick={handleCreatePost}>
            Create Post
          </button>
        </>
      );
    }
  };
  return (
    <div className="card">
      <h1 className="title">User List</h1>
      <div className="user-list-container">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <div className="user-details">
              <h5>ID: {user.id}</h5>
              <h6>Username: {user.username}</h6>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <div className="btns">
                <button className="btns-btn" onClick={() => openModal("todos")}>
                  Todos
                </button>
                <button className="btns-btn" onClick={() => openModal("posts")}>
                  Posts
                </button>
                <button className="btns-btn">Gallery</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {renderModalContent()}
            <button className="modal-close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="todo-list">
        <h2>{currentTab === "todos" ? "Todo List" : "Post List"}</h2>
        <ul>
          {currentTab === "todos" &&
            todos.map((todo) => (
              <li key={todo.id}>
                {todo.text} - {todo.user.username} {todo.user.lastname} (
                {todo.user.phone})
              </li>
            ))}
          {currentTab === "posts" &&
            posts.map((post) => (
              <li key={post.id}>
                {post.title} - {post.user.username} {post.user.lastname} (
                {post.user.phone})
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
