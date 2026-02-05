import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    loading: false,
    error: null
  }),

  getters: {
    completedTasks: (state) => state.tasks.filter(task => task.completed),
    pendingTasks: (state) => state.tasks.filter(task => !task.completed),
    totalTasks: (state) => state.tasks.length
  },

  actions: {
    async fetchTasks() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`${API_URL}/tasks`)
        this.tasks = response.data
      } catch (error) {
        this.error = 'Error al cargar las tareas'
        console.error('Error fetching tasks:', error)
      } finally {
        this.loading = false
      }
    },

    async createTask(taskData) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.post(`${API_URL}/tasks`, taskData)
        this.tasks.unshift(response.data)
        return response.data
      } catch (error) {
        this.error = 'Error al crear la tarea'
        console.error('Error creating task:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateTask(id, updateData) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.put(`${API_URL}/tasks/${id}`, updateData)
        const index = this.tasks.findIndex(task => task.id === id)
        if (index !== -1) {
          this.tasks[index] = response.data
        }
        return response.data
      } catch (error) {
        this.error = 'Error al actualizar la tarea'
        console.error('Error updating task:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteTask(id) {
      this.loading = true
      this.error = null
      try {
        await axios.delete(`${API_URL}/tasks/${id}`)
        this.tasks = this.tasks.filter(task => task.id !== id)
      } catch (error) {
        this.error = 'Error al eliminar la tarea'
        console.error('Error deleting task:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async toggleTaskComplete(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        await this.updateTask(id, { completed: !task.completed })
      }
    }
  }
})