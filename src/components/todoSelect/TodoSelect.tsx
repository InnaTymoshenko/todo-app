import React from 'react'
import { useTodoSelect } from '../../store/store'

const TodoSelect: React.FC = props => {
	const { select, setSelect } = useTodoSelect()

	return (
		<React.Fragment>
			<div className={select === 'all' ? 'select-item item-active' : 'select-item '} onClick={() => setSelect('all')}>
				All
			</div>
			<div
				className={select === 'active' ? 'select-item item-active' : 'select-item '}
				onClick={() => setSelect('active')}
			>
				Active
			</div>
			<div
				className={select === 'completed' ? 'select-item item-active' : 'select-item '}
				onClick={() => setSelect('completed')}
			>
				Completed
			</div>
		</React.Fragment>
	)
}

export default TodoSelect
