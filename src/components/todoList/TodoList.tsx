import React from 'react'
import TodoItem from '../todoItem/TodoItem'
import TodoSelect from '../todoSelect/TodoSelect'
import { useTodoSelect, useTodos } from '../../store/store'

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

	return (
		<React.Fragment>
			<div className="todo-list">
				{todos.map(todo => (
					<div key={todo.id} className="todo-item">
						<TodoItem id={todo.id} title={todo.title} completed={todo.completed} countId={todo.countId} />
					</div>
				))}

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
