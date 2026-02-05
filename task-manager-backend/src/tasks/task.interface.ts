import { Timestamp } from 'firebase-admin/firestore';

export interface Task {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date | Timestamp;
  updatedAt: Date | Timestamp;
}

export class CreateTaskDto {
  title: string;
  description: string;
}

export class UpdateTaskDto {
  title?: string;
  description?: string;
  completed?: boolean;
}