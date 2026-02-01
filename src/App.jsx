import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

const API_URL = import.meta.env.VITE_API_URL || "/api/tasks"; //
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API_URL);
      setTasks(res.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.title) return alert("Title is required");

    try {
      if (isEditing) {
        await axios.put(`${API_URL}/${currentId}`, task);
        setIsEditing(false);
        setCurrentId(null);
      } else {
        await axios.post(API_URL, task);
      }
      setTask({ title: "", description: "", status: "Pending" });
      fetchTasks();
    } catch (err) {
      console.error("Submit Error:", err);
    }
  };

  const handleEdit = (t) => {
    setIsEditing(true);
    setCurrentId(t._id);
    setTask({ title: t.title, description: t.description, status: t.status });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`${API_URL}/${id}`, { status });
      fetchTasks();
    } catch (err) {
      console.error("Status Update Error:", err);
    }
  };

  const deleteTask = async (id) => {
    if (window.confirm("Delete this task?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchTasks();
      } catch (err) {
        console.error("Delete Error:", err);
      }
    }
  };

  return (
    <div className="container">
      <Header />

      <TaskForm
        task={task}
        setTask={setTask}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />

      <div className="task-grid">
        {tasks.map((t) => (
          <TaskCard
            key={t._id}
            task={t}
            updateStatus={updateStatus}
            handleEdit={handleEdit}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
