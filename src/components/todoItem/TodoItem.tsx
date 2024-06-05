import React from 'react'
import { ITodo } from '../../types/data'
import { useTodos } from '../../store/store'
import Cross from '../icons/cross'
import Check from '../icons/check'

const TodoItem: React.FC<ITodo> = props => {
	const todo = props
	const toggleTodo = useTodos(state => state.toggleTodo)
	const removeTodo = useTodos(state => state.removeTodo)

	return (
		<React.Fragment>
			<div key={todo.id} className="todo-item">
				<div className={todo.completed ? 'todo-circle complete' : 'todo-circle'} onClick={e => toggleTodo(todo.id)}>
					{todo.completed ? <Check /> : null}
				</div>
				<p className={todo.completed ? 'todo-title todo-complete' : 'todo-title'}>{todo.title}</p>
				<div className="todo-cross" onClick={e => removeTodo(todo.id)}>
					<Cross />
				</div>
			</div>
		</React.Fragment>
	)
}

export default TodoItem
