<template>
  <div class="task-list">
    <div v-if="tasks.length === 0" class="empty-state">
      <div class="empty-icon">📋</div>
      <p>No hay tareas aún</p>
      <p class="empty-subtitle">¡Crea tu primera tarea arriba!</p>
    </div>

    <TransitionGroup name="list" tag="div" v-else>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </TransitionGroup>
  </div>
</template>

<script setup>
import TaskItem from './TaskItem.vue'

defineProps({
  tasks: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.task-list {
  min-height: 200px;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-state p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.empty-subtitle {
  font-size: 0.9rem !important;
  color: #999 !important;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
