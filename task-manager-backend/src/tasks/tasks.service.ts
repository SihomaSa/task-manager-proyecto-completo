import { Injectable, NotFoundException } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';
import { Task, CreateTaskDto, UpdateTaskDto } from './task.interface';
import { Timestamp } from 'firebase-admin/firestore';

@Injectable()
export class TasksService {
  private collectionName = 'tasks';

  constructor(private firebaseService: FirebaseService) {}

  async findAll(): Promise<Task[]> {
    try {
      const db = this.firebaseService.getFirestore();
      const snapshot = await db
        .collection(this.collectionName)
        .orderBy('createdAt', 'desc')
        .get();

      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Task[];
    } catch (error) {
      console.error('Error al obtener tareas:', error);
      throw error;
    }
  }

  async findOne(id: string): Promise<Task> {
    try {
      const db = this.firebaseService.getFirestore();
      const doc = await db.collection(this.collectionName).doc(id).get();

      if (!doc.exists) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }

      return {
        id: doc.id,
        ...doc.data(),
      } as Task;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al obtener tarea:', error);
      throw error;
    }
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    try {
      const db = this.firebaseService.getFirestore();
      const now = Timestamp.now();

      const task: Omit<Task, 'id'> = {
        ...createTaskDto,
        completed: false,
        createdAt: now,
        updatedAt: now,
      };

      const docRef = await db.collection(this.collectionName).add(task);

      return {
        id: docRef.id,
        ...task,
      };
    } catch (error) {
      console.error('Error al crear tarea:', error);
      throw error;
    }
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    try {
      const db = this.firebaseService.getFirestore();
      const docRef = db.collection(this.collectionName).doc(id);

      // Verificar que existe
      const doc = await docRef.get();
      if (!doc.exists) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }

      const updateData = {
        ...updateTaskDto,
        updatedAt: Timestamp.now(),
      };

      await docRef.update(updateData);

      return this.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al actualizar tarea:', error);
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const db = this.firebaseService.getFirestore();
      const docRef = db.collection(this.collectionName).doc(id);

      // Verificar que existe
      const doc = await docRef.get();
      if (!doc.exists) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }

      await docRef.delete();
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      console.error('Error al eliminar tarea:', error);
      throw error;
    }
  }
}