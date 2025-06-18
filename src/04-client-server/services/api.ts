const baseUrl = 'http://localhost:3000/tasks'

export async function fetchTasks() {
  const response = await fetch(`${baseUrl}`)
  const data = await response.json()
  return data
}

export async function createTask(title: string) {
  const response = await fetch(`${baseUrl}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  })
  const data = await response.json()
  return data
}

export async function updateTask(id: string, patch: unknown) {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patch),
  })
  const data = await response.json()
  return data
}

export async function removeTask(id: string) {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
  const data = await response.json()
  return data
}
