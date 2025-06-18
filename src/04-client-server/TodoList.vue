<script setup lang="ts">
import { useListStore } from './stores/list'

const list = useListStore()
</script>

<template>
  <ul>
    <li v-for="(task, index) of list.tasks" :key="task.id">
      <span :class="{ completed: task.completed }" @click="list.toggle(index)">{{
        task.title
      }}</span>
      &nbsp;
      <button @click="list.remove(index)">x</button>
    </li>
  </ul>
</template>

<style>
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
