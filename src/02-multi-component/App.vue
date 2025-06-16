<script setup lang="ts">
import { ref } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

const tasks = ref([
  { id: 1, title: 'Learn Vue', completed: true },
  { id: 2, title: 'Look for a job', completed: false },
  { id: 3, title: 'Forget everything' },
])

function handleAdd(text) {
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  tasks.value.push({ id: maxId + 1, title: text })
}

function handleToggle(index) {
  tasks.value[index].completed = !tasks.value[index].completed
}

function handleRemove(index) {
  tasks.value.splice(index, 1)
}
</script>

<template>
  <h1>Todo List</h1>
  <todo-form @add="handleAdd" />
  <todo-list :tasks="tasks" @toggle="handleToggle" @remove="handleRemove" />
</template>
