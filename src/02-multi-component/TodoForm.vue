<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['add'])
const text = ref('')

function handleAdd() {
  emit('add', text.value)
  text.value = ''
}
</script>

<template>
  <form @submit.prevent="handleAdd">
    <input placeholder="What next?" v-model="text" />
    <button type="submit">Add</button>
  </form>
</template>
