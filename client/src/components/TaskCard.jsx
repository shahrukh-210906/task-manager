const TaskCard = ({ task, updateStatus, handleEdit, deleteTask }) => {
  return (
    <div className="task-card">
      <div className="task-content">
        <span className={`status-badge ${task.status.toLowerCase()}`}>
          {task.status}
        </span>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>

      <div className="task-actions">
        {/* Toggle Complete Status */}
        <button
          className="icon-btn done-btn"
          title={
            task.status === "Completed" ? "Mark Pending" : "Mark Completed"
          }
          onClick={() =>
            updateStatus(
              task._id,
              task.status === "Completed" ? "Pending" : "Completed",
            )
          }
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>

        {/* Edit Button */}
        <button
          className="icon-btn edit-btn"
          title="Edit"
          onClick={() => handleEdit(task)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>

        {/* Delete Button */}
        <button
          className="icon-btn del-btn"
          title="Delete"
          onClick={() => deleteTask(task._id)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
