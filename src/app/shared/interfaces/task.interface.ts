export interface Subtask {
    completed: boolean;
    subtask: string;
}

export interface Task {
    id: string;
    assignedTo: string[];
    category: string;
    description: string;
    dueDate: Date;
    priority: string;
    subtasks: Subtask[];
    title: string;
    type: string;
}