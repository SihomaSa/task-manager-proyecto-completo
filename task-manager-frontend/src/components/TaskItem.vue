<template>
  <div class="task-item" :class="{ completed: task.completed }">
    <div class="task-content">
      <button 
        @click="toggleComplete" 
        class="checkbox"
        :class="{ checked: task.completed }"
      >
        <span v-if="task.completed">✓</span>
      </button>
      
      <div class="task-info">
        <h3 class="task-title">{{ task.title }}</h3>
        <p v-if="task.description" class="task-description">
          {{ task.description }}
        </p>
        <span class="task-date">
          {{ formatDate(task.createdAt) }}
        </span>
      </div>
    </div>

    <button @click="deleteTask" class="delete-btn" title="Eliminar tarea">
      🗑️
    </button>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const taskStore = useTaskStore()

const toggleComplete = async () => {
  await taskStore.toggleTaskComplete(props.task.id)
}

const deleteTask = async () => {
  if (confirm('¿Estás seguro de eliminar esta tarea?')) {
    await taskStore.deleteTask(props.task.id)
  }
}

const formatDate = (date) => {
  if (!date) return ''
  const d = new Date(date.seconds ? date.seconds * 1000 : date)
  return d.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.task-item {
  background: white;
  padding: 1.25rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
}

.task-item:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}

.task-item.completed {
  opacity: 0.7;
  background: #f8f9fa;
}

.task-content {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
}

.checkbox {
  width: 24px;
  height: 24px;
  border: 2px solid #667eea;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.checkbox:hover {
  background: #f0f0f0;
}

.checkbox.checked {
  background: #667eea;
  color: white;
}

.task-info {
  flex: 1;
}

.task-title {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.25rem;
  word-break: break-word;
}

.completed .task-title {
  text-decoration: line-through;
  color: #999;
}

.task-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.task-date {
  font-size: 0.8rem;
  color: #999;
}

.delete-btn {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem;
  opacity: 0.6;
  transition: all 0.2s;
}

.delete-btn:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>
