import { filteredTask } from '../components/task-list/task-list-utils'
import { ITask } from '../main-types'

describe('filtered-task', () => {
	let initialTaskList: ITask[] | null = null
	beforeEach(() => {
		initialTaskList = [
			{ id: '1', title: 'Bread', completed: false },
			{ id: '2', title: 'Milk', completed: true },
			{ id: '3', title: 'Sugar', completed: true },
			{ id: '4', title: 'Salt', completed: false },
			{ id: '5', title: 'Eggs', completed: true }
		]
	})

	test('Completed taskList', () => {
		const filteredTasks = filteredTask(initialTaskList, 'completed')
		expect(filteredTasks).toEqual([
			{ id: '2', title: 'Milk', completed: true },
			{ id: '3', title: 'Sugar', completed: true },
			{ id: '5', title: 'Eggs', completed: true }
		])
	})
	test('Active TaskList', () => {
		const filteredTasks = filteredTask(initialTaskList, 'active')
		expect(filteredTasks).toEqual([
			{ id: '1', title: 'Bread', completed: false },
			{ id: '4', title: 'Salt', completed: false }
		])
	})
	test('All taskList', () => {
		const filteredTasks = filteredTask(initialTaskList, 'all')
		expect(filteredTasks).toEqual([
			{ id: '1', title: 'Bread', completed: false },
			{ id: '2', title: 'Milk', completed: true },
			{ id: '3', title: 'Sugar', completed: true },
			{ id: '4', title: 'Salt', completed: false },
			{ id: '5', title: 'Eggs', completed: true }
		])
	})

	test('Empty taskList', () => {
		const filteredTasks = filteredTask([], 'all')
		expect(filteredTasks).toEqual([])
	})
	test('taskList is null', () => {
		const filteredTasks = filteredTask(null, 'all')
		expect(filteredTasks).toEqual([])
	})
	test('taskList is undefined', () => {
		const filteredTasks = filteredTask(undefined, 'all')
		expect(filteredTasks).toEqual([])
	})
})
