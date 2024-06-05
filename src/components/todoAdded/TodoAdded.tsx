import { useState } from 'react'
import { useTodos } from '../../store/store'

const TodoAdded: React.FC = props => {
	const [value, setValue] = useState('')
	const addTodo = useTodos(state => state.addTodo)

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setValue(e.target.value)
	}

	const handleAddTodo = () => {
		if (value) {
			addTodo(value)
			setValue('')
		}
	}

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === 'Enter') {
			addTodo(value)
			setValue('')
		}
	}

	return (
		<div className="create_todo">
			<div className="todo-circle" onClick={handleAddTodo} />
			<input
				type="text"
				placeholder="Create a new todo..."
				value={value}
				onChange={e => handleChange(e)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	)
}

export default TodoAdded
