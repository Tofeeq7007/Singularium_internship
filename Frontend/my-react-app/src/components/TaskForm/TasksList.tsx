import React from 'react';
import { Circle } from 'lucide-react';
import { TaskCard } from './TaskCard';
import type { Task } from '../../types';

interface Props {
  tasks: Task[];
  loading: boolean;
  onDelete?: (id: string) => void;
  onStatusChange?: (id: string, status: string) => void;
}

export const TasksList: React.FC<Props> = ({ 
  tasks, 
  loading, 
  onDelete,
  onStatusChange 
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <Circle size={48} className="mx-auto text-gray-300 mb-3" />
        <p className="text-gray-500">No tasks yet. Create one to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map(task => (
        <TaskCard 
          key={task._id} 
          task={task}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};