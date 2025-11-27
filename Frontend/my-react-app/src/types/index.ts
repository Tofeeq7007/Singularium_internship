export interface Task {
  _id: string;
  title: string;
  description?: string;
  urgency: number;
  importance: number;
  effort: number;
  deadline?: string;
  dependencies?: string[];
  score: number;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: string;
}

export interface CreateTaskInput {
  title: string;
  description: string;
  urgency: number;
  importance: number;
  effort: number;
  deadline: string;
}