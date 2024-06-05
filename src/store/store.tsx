import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { v4 as uuidv4 } from 'uuid'
import { ITodo } from '../types/data'

interface ITodoStore {
	todos: ITodo[]
	addTodo: (title: string) => void
	toggleTodo: (id: string) => void
	removeTodo: (id: string) => void
	removeCompletedTodo: () => void
}

interface ISelect {
	select: string
	setSelect: (value: string) => void
}

export const useTodos = create<ITodoStore>()(
	persist<ITodoStore>(
		(set, get) => ({
			todos: [],
			addTodo: title => {
				const newTodo = {
					id: uuidv4(),
					countId: get().todos.length + 1,
					title: title,
					completed: false
				}
				set({ todos: [newTodo, ...get().todos] })
			},
			toggleTodo: id =>
				set({
					todos: get().todos.map(todo => (id === todo.id ? { ...todo, completed: !todo.completed } : todo))
				}),
			removeTodo: id =>
				set({
					todos: get().todos.filter(todo => todo.id !== id)
				}),
			removeCompletedTodo: () =>
				set({
					todos: get().todos.filter(todo => !todo.completed)
				})
		}),
		{
			name: 'todos',
			storage: createJSONStorage(() => localStorage)
		}
	)
)

export const useTodoSelect = create<ISelect>()(set => ({
	select: 'all',
	setSelect: value => set({ select: value })
}))
