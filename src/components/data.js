const STORAGE_KEY = 'genz_posts_v1'
const defaultUsers = [
  { id: 'u1', name: 'Alice' },
  { id: 'u2', name: 'Bob' },
  { id: 'u3', name: 'Charlie' }
]
const defaultPosts = [
  {
  id: 'p0',
  title: 'Welcome to GenZ',
  authorId: 'u1',
  content: 'This is the first demo post.',
  reactions: [0,0,0,0,0]
  }
]

export function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { users: defaultUsers, posts: defaultPosts }
    return JSON.parse(raw)
  } catch (e) {
  return { users: defaultUsers, posts: defaultPosts }
  }
}

export function saveData(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function makeId(prefix='id'){
  return prefix + Math.random().toString(36).slice(2,9)
}
