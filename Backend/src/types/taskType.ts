export interface CreateInput {
    title: string;
    description?: string;
    urgency: number;
    importance: number;
    effort: number;
    deadline?: Date;
    dependencies?: string[];
}
export interface ProcessTask extends CreateInput {
  score: number;
}

// final stored task in DB  
export interface TaskType {
    id: string;
    title: string;
    description?: string;
    urgency: number;
    importance: number;
    effort: number;
    deadline?: Date;
    dependencies?: string[];
    score: number;
}