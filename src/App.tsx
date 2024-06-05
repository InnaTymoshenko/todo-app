import React, { useEffect, useState } from 'react'
import Container from './components/container/Container'
import Header from './components/header/Header'
import TodoList from './components/todoList/TodoList'
import TodoAdded from './components/todoAdded/TodoAdded'
import building from './images/bg-desktop-dark.jpg'
import mountain from './images/bg-desktop-light.jpg'
import Sun from './components/icons/sun'
import Moon from './components/icons/moon'
import { useTodos } from './store/store'

import './App.css'

const App: React.FC = () => {
	const [theme, setTheme] = useState(localStorage.getItem('todo-theme') || 'dark')
	const todos = useTodos(state => state.todos)

	const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
		localStorage.setItem('todo-theme', theme)
	}, [theme])

	return (
		<div
			className="wrapper"
			style={theme === 'dark' ? { backgroundImage: `url(${building})` } : { backgroundImage: `url(${mountain})` }}
		>
			<Container className={todos.length ? 'block-container block-list' : 'block-container'}>
				<Header className="header">
					<h1>TODO</h1>
					<div onClick={toggleTheme}>{theme === 'dark' ? <Sun /> : <Moon />}</div>
				</Header>
				<TodoAdded />
				<TodoList />
			</Container>
		</div>
	)
}

export default App
