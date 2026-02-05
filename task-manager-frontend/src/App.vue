<template>
  <div class="app-container">
    <div class="container">
      <header class="header">
        <h1>📝 Gestor de Tareas</h1>
        <p>Organiza tu día con eficiencia</p>
      </header>

      <div class="stats">
        <div class="stat-card">
          <span class="stat-number">{{ taskStore.totalTasks }}</span>
          <span class="stat-label">Total</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ taskStore.pendingTasks.length }}</span>
          <span class="stat-label">Pendientes</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">{{ taskStore.completedTasks.length }}</span>
          <span class="stat-label">Completadas</span>
        </div>
      </div>

      <TaskForm @task-created="handleTaskCreated" />

      <div v-if="taskStore.loading" class="loading">
        <div class="spinner"></div>
        <p>Cargando tareas...</p>
      </div>

      <div v-else-if="taskStore.error" class="error-message">
        {{ taskStore.error }}
      </div>

      <TaskList v-else :tasks="taskStore.tasks" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTaskStore } from './stores/taskStore'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

const taskStore = useTaskStore()

onMounted(() => {
  taskStore.fetchTasks()
})

const handleTaskCreated = () => {
  // Podrías agregar una notificación aquí
  console.log('Tarea creada exitosamente')
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  padding: 2rem 1rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.header {
  text-align: center;
  color: white;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.loading {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  background: #fee;
  color: #c33;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #fcc;
}
</style>
