<script setup lang="ts">
defineProps(['tasks'])
const emit = defineEmits(['toggle', 'remove'])

function handleToggle(index) {
  emit('toggle', index)
}

function handleRemove(index) {
  emit('remove', index)
}
</script>

<template>
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
