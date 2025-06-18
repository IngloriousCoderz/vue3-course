import { ref, onMounted, type Ref } from 'vue'
import { defineStore } from 'pinia'
import * as api from '../services/api'

interface Task {
  id: string
  title: string
  completed?: boolean
}

export const useListStore = defineStore('list', () => {
  const tasks: Ref<Task[]> = ref([])

  onMounted(async () => {
    const data = await api.fetchTasks()
    tasks.value = data
  })

  async function add(text: string) {
    const createdTask: Task = await api.createTask(text)
    tasks.value.push(createdTask)
  }

  async function toggle(index: number) {
    const { id } = tasks.value[index]
    const updatedTask = await api.updateTask(id, { completed: !tasks.value[index].completed })
    tasks.value[index] = updatedTask
  }

  async function remove(index: number) {
    const { id } = tasks.value[index]
    await api.removeTask(id)
    tasks.value.splice(index, 1)
  }

  return { tasks, add, toggle, remove }
})
