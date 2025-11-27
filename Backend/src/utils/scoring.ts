import { CreateInput } from "../types/taskType";

export function calculateScore(task:CreateInput){
    const urgencyWeight=0.4;
    const importanceWeight=0.4;
    const effortWeight=0.2;

    return (
        task.urgency*urgencyWeight +
        task.importance*importanceWeight +
        (10 - task.effort)*effortWeight
    );
}