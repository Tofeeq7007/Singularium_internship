import  { useState } from 'react';
import { useTasks } from './hooks/useTasks';
import type { CreateTaskInput } from './types';
import { CreateTaskForm } from './components/TaskForm/CreateTaskForm';
import { TasksList } from './components/TaskForm/TasksList';

export default function App() {
  const [sortBy, setSortBy] = useState<'score' | 'deadline' | 'all'>('score');
  const { tasks, loading, error, createTask, deleteTask, updateStatus } = 
    useTasks(sortBy);

  const handleCreateTask = async (taskData: CreateTaskInput) => {
    await createTask(taskData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Task Analyzer</h1>
              <p className="text-sm text-gray-600 mt-1">
                Smart task prioritization at your fingertips
              </p>
            </div>
            <CreateTaskForm onTaskCreated={handleCreateTask} />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6 flex gap-2 flex-wrap">
          <button
            onClick={() => setSortBy('score')}
            className={`px-4 py-2 rounded-lg transition-all ${
              sortBy === 'score'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
            }`}
          >
            Priority Score
          </button>
          <button
            onClick={() => setSortBy('deadline')}
            className={`px-4 py-2 rounded-lg transition-all ${
              sortBy === 'deadline'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
            }`}
          >
            By Deadline
          </button>
          <button
            onClick={() => setSortBy('all')}
            className={`px-4 py-2 rounded-lg transition-all ${
              sortBy === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
            }`}
          >
            All Tasks
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <TasksList
          tasks={tasks} 
          loading={loading}
          onDelete={deleteTask}
          onStatusChange={updateStatus}
        />
      </div>
    </div>
  );
}