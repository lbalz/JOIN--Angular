import { Task } from './task.interface';

export interface Tasks {
    toDo: Task[];
    inProgress: Task[];
    awaitFeedback: Task[];
    done: Task[];
}