import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useListStore = defineStore('list', () => {
  const tasks = ref([
    { id: 1, title: 'Learn Vue', completed: true },
    { id: 2, title: 'Look for a job', completed: false },
    { id: 3, title: 'Forget everything' },
  ])

  function add(text: string) {
    const maxId = tasks.value.length ? tasks.value[tasks.value.length - 1].id : 0
    tasks.value.push({ id: maxId + 1, title: text })
  }

  function toggle(index: number) {
    tasks.value[index].completed = !tasks.value[index].completed
  }

  function remove(index: number) {
    tasks.value.splice(index, 1)
  }

  return { tasks, add, toggle, remove }
})
