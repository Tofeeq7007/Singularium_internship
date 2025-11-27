import React from 'react';
import { Trash2, CheckCircle2, Calendar } from 'lucide-react';
import { ScoreIndicator } from './ScoreIndicator';
import { PriorityBadges } from './PriorityBadges';
import type { Task } from '../../types';

interface Props {
  task: Task;
  onDelete?: (id: string) => void;
  onStatusChange?: (id: string, status: string) => void;
}

export const TaskCard: React.FC<Props> = ({ task, onDelete, onStatusChange }) => {
  const daysUntilDeadline = task.deadline
    ? Math.ceil(
        (new Date(task.deadline).getTime() - new Date().getTime()) / 
        (1000 * 60 * 60 * 24)
      )
    : null;

  const isOverdue = daysUntilDeadline !== null && daysUntilDeadline < 0;
  const isUrgent = 
    daysUntilDeadline !== null && 
    daysUntilDeadline <= 3 && 
    daysUntilDeadline >= 0;

  const handleMarkComplete = () => {
    if (onStatusChange) {
      const newStatus = task.status === 'completed' ? 'pending' : 'completed';
      onStatusChange(task._id, newStatus);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{task.title}</h3>
          {task.description && (
            <p className="text-sm text-gray-600">{task.description}</p>
          )}
        </div>
        <div className="ml-2">
          <ScoreIndicator score={task.score} />
        </div>
      </div>

      <PriorityBadges 
        urgency={task.urgency} 
        importance={task.importance} 
        effort={task.effort} 
      />

      <div className="flex items-center justify-between mt-4 pt-3 border-t">
        {task.deadline && (
          <div className={`flex items-center gap-1 text-sm ${
            isOverdue 
              ? 'text-red-600' 
              : isUrgent 
              ? 'text-orange-600' 
              : 'text-gray-600'
          }`}>
            <Calendar size={14} />
            <span>
              {isOverdue 
                ? `${Math.abs(daysUntilDeadline)} days overdue` 
                : `${daysUntilDeadline} days left`}
            </span>
          </div>
        )}
        <div className="flex gap-2">
          <button 
            onClick={handleMarkComplete}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            title="Mark complete"
          >
            <CheckCircle2 
              size={18} 
              className={task.status === 'completed' ? 'text-green-600' : 'text-gray-400'} 
            />
          </button>
          <button 
            onClick={() => onDelete?.(task._id)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            title="Delete task"
          >
            <Trash2 size={18} className="text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};