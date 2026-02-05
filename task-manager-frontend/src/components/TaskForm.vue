<template>
  <div class="task-form-container">
    <form @submit.prevent="handleSubmit" class="task-form">
      <div class="form-group">
        <input
          v-model="formData.title"
          type="text"
          placeholder="¿Qué necesitas hacer?"
          class="input-field"
          required
        />
      </div>
      <div class="form-group">
        <textarea
          v-model="formData.description"
          placeholder="Descripción (opcional)"
          class="textarea-field"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="submit-btn" :disabled="loading">
        <span v-if="loading">⏳ Creando...</span>
        <span v-else>➕ Agregar Tarea</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const emit = defineEmits(['task-created'])
const taskStore = useTaskStore()

const formData = ref({
  title: '',
  description: ''
})

const loading = ref(false)

const handleSubmit = async () => {
  if (!formData.value.title.trim()) return

  loading.value = true
  try {
    await taskStore.createTask({
      title: formData.value.title,
      description: formData.value.description
    })
    
    // Limpiar formulario
    formData.value = {
      title: '',
      description: ''
    }
    
    emit('task-created')
  } catch (error) {
    console.error('Error al crear tarea:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.task-form-container {
  margin-bottom: 2rem;
}

.task-form {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1rem;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.input-field:focus,
.textarea-field:focus {
  outline: none;
  border-color: #667eea;
}

.textarea-field {
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(102, 126, 234, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
