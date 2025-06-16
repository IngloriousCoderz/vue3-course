<script setup lang="ts">
import { useFormStore } from './stores/form'
import { useListStore } from './stores/list'

const form = useFormStore()
const list = useListStore()

// never destructure reactive state directly from a store! Use storeToRefs to preserve reactivity
// const { text } = storeToRefs(form)

function handleAdd() {
  list.add(form.text)
  form.text = ''
}
</script>

<template>
  <form @submit.prevent="handleAdd">
    <input placeholder="What next?" v-model="form.text" />
    <button type="submit">Add</button>
  </form>
</template>
