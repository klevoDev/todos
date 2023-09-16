import { IMainState } from '../main-types'
import {
	changeFilterAC,
	changeTaskStatusAC,
	createTaskAC,
	deleteCompetedTasksAC
} from '../main-actions'
import { mainReducer } from '../main-reducer'

describe('main-reducer', () => {
	let startState: IMainState
	beforeEach(() => {
		startState = {
			filter: 'all',
			heading: 'Todos',
			tasks: [
				{ id: '1', title: 'Bread', completed: false },
				{ id: '2', title: 'Milk', completed: true },
				{ id: '3', title: 'Sugar', completed: true },
				{ id: '4', title: 'Salt', completed: false },
				{ id: '5', title: 'Eggs', completed: true }
			]
		}
	})

	test('change filter', () => {
		const action = changeFilterAC('completed')
		const endState = mainReducer(startState, action)

		expect(endState).toEqual({
			filter: 'completed',
			heading: 'Todos',
			tasks: [
				{ id: '1', title: 'Bread', completed: false },
				{ id: '2', title: 'Milk', completed: true },
				{ id: '3', title: 'Sugar', completed: true },
				{ id: '4', title: 'Salt', completed: false },
				{ id: '5', title: 'Eggs', completed: true }
			]
		})
	})

	test('change task status', () => {
		const completed = true
		const id = '1'
		const action = changeTaskStatusAC(id, completed)

		const endState = mainReducer(startState, action)

		expect(endState).toEqual({
			filter: 'all',
			heading: 'Todos',
			tasks: [
				{ id, title: 'Bread', completed },
				{ id: '2', title: 'Milk', completed: true },
				{ id: '3', title: 'Sugar', completed: true },
				{ id: '4', title: 'Salt', completed: false },
				{ id: '5', title: 'Eggs', completed: true }
			]
		})
	})

	test('create task', () => {
		const title = 'Test'
		const action = createTaskAC(title)
		const endState = mainReducer(startState, action)

		const newTaskId = action.payload.taskId
		expect(endState).toEqual({
			filter: 'all',
			heading: 'Todos',
			tasks: [
				{ id: newTaskId, title, completed: false },
				{ id: '1', title: 'Bread', completed: false },
				{ id: '2', title: 'Milk', completed: true },
				{ id: '3', title: 'Sugar', completed: true },
				{ id: '4', title: 'Salt', completed: false },
				{ id: '5', title: 'Eggs', completed: true }
			]
		})
	})

	test('delete completed task', () => {
		const action = deleteCompetedTasksAC()
		const endState = mainReducer(startState, action)

		expect(endState).toEqual({
			filter: 'all',
			heading: 'Todos',
			tasks: [
				{ id: '1', title: 'Bread', completed: false },
				{ id: '4', title: 'Salt', completed: false }
			]
		})
	})
})
