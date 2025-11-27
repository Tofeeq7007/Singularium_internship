import React from "react";
import type { Task } from "../../../types/taskType";

interface Props {
  task: Task;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  const getPriorityColor = (score?: number) => {
    if (!score) return "bg-gray-100";
    if (score >= 8) return "bg-red-200";
    if (score >= 5) return "bg-yellow-200";
    return "bg-green-200";
  };

  return (
    <div className={`p-4 mb-2 rounded shadow ${getPriorityColor(task.score)}`}>
      <h3 className="font-bold">{task.title}</h3>
      <p>Urgency: {task.urgency}, Importance: {task.importance}, Effort: {task.effort}</p>
      <p>Score: {task.score?.toFixed(2)}</p>
      {task.dependencies?.length ? (
        <p>Depends on: {task.dependencies.join(", ")}</p>
      ) : null}
    </div>
  );
};

export default TaskItem;
