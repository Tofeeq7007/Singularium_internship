export interface Task {
  _id?: string;
  title: string;
  description?: string;
  urgency: number;      // 1-10
  importance: number;   // 1-10
  effort: number;       // 1-10
  dependencies?: string[];
  score?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateInput {
  title: string;
  description?: string;
  urgency: number;
  importance: number;
  effort: number;
  dependencies?: string[];
}
