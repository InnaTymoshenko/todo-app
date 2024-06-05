import React, { useEffect, useState } from 'react'
import { Reorder } from 'framer-motion'
import TodoItem from '../todoItem/TodoItem'
import TodoSelect from '../todoSelect/TodoSelect'
import { useTodoSelect, useTodos } from '../../store/store'
import { ITodo } from '../../types/data'

const TodoList: React.FC = props => {
	const select = useTodoSelect(state => state.select)
	const removeCompletedTodo = useTodos(state => state.removeCompletedTodo)
	const todos = useTodos(state => {
		switch (select) {
			case 'active':
				return state.todos.filter(todo => !todo.completed)
			case 'completed':
				return state.todos.filter(todo => todo.completed)
			default:
				return state.todos
		}
	})

	const [items, setItems] = useState<ITodo[]>([])

	useEffect(() => {
		setItems(todos)
	}, [todos])

	return (
		<React.Fragment>
			<div className="todo-list">
				<Reorder.Group as="div" axis="y" values={items} onReorder={setItems}>
					{items.map(todo => (
						<Reorder.Item as="div" key={todo.id} value={todo}>
							<TodoItem id={todo.id} title={todo.title} completed={todo.completed} countId={todo.countId} />
						</Reorder.Item>
					))}
				</Reorder.Group>

				<div>
					{todos.length ? (
						<div className="todo-bottom">
							<div>{todos.length === 1 ? `1 item left` : `${todos.length} items left`}</div>
							<div className="todo-select">
								<TodoSelect />
							</div>
							<div className="completed-clear" onClick={() => removeCompletedTodo()}>
								Clear Completed
							</div>
						</div>
					) : null}
				</div>
			</div>
			{todos.length ? (
				<div className="mobile_bottom">
					<TodoSelect />
				</div>
			) : null}
		</React.Fragment>
	)
}

export default TodoList
