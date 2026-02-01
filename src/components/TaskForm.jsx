const TaskForm = ({ task, setTask, handleSubmit, isEditing, setIsEditing }) => {
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <input
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button
        type="submit"
        className={`add-btn ${isEditing ? "update-mode" : ""}`}
      >
        {isEditing ? "Update Task" : "Create Task"}
      </button>

      {isEditing && (
        <button
          type="button"
          onClick={() => {
            setIsEditing(false);
            setTask({ title: "", description: "", status: "Pending" });
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskForm;
