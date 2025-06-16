<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
const tasks = ref([
  { id: 1, title: 'Learn Vue', completed: true },
  { id: 2, title: 'Look for a job', completed: false },
  { id: 3, title: 'Forget everything' },
])

function handleAdd() {
  const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
  tasks.value.push({ id: maxId + 1, title: text.value })
  text.value = ''
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
  <form @submit.prevent="handleAdd">
    <input placeholder="What next?" v-model="text" />
    <button type="submit">Add</button>
  </form>
  <ul>
    <li v-for="(task, index) of tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="handleToggle(index)">{{
        task.title
      }}</span>
      &nbsp;
      <button @click="handleRemove(index)">x</button>
    </li>
  </ul>
</template>

<style>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
