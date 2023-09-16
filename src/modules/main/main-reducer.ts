import { v4 } from 'uuid'
import { TodoListAT, IMainState } from './main-types'

const initialState: IMainState = {
	filter: 'all',
	heading: 'Todos',
	tasks: [
		{ id: v4(), title: 'Bread', completed: false },
		{ id: v4(), title: 'Milk', completed: true },
		{ id: v4(), title: 'Sugar', completed: true },
		{ id: v4(), title: 'Salt', completed: false },
		{ id: v4(), title: 'Eggs', completed: true }
	]
}

export const mainReducer = (
	state = initialState,
	action: TodoListAT
): IMainState => {
	switch (action.type) {
		case 'main/CHANGE-TASK-STATUS':
			return {
				...state,
				tasks: state.tasks.map((task) =>
					task.id === action.payload.taskId
						? { ...task, completed: action.payload.completed }
						: task
				)
			}
		case 'main/CREATE-TASK':
			const newTask = {
				id: action.payload.taskId,
				title: action.payload.title,
				completed: false
			}
			return {
				...state,
				tasks: [newTask, ...state.tasks]
			}
		case 'main/DELETE-COMPLETED-TASKS':
			const updatedTasks = state.tasks.filter((task) => !task.completed)
			return {
				...state,
				tasks: updatedTasks
			}
		case 'main/CHANGE-FILTER':
			return {
				...state,
				filter: action.payload.filter
			}
	}

	return state
}
