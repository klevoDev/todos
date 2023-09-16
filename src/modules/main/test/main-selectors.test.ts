import {
	getActiveTaskCount,
	getFilter,
	getHeading,
	getTasks
} from '../main-selectors'
import { TRootState } from 'core/types/redux'

describe('Selectors', () => {
	const initialState: TRootState = {
		main: {
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
	}

	test('select the heading', () => {
		const selectedHeader = getHeading(initialState)
		expect(selectedHeader).toBe('Todos')
	})

	test('select the tasks', () => {
		const selectedTasks = getTasks(initialState)
		expect(selectedTasks).toEqual([
			{ id: '1', title: 'Bread', completed: false },
			{ id: '2', title: 'Milk', completed: true },
			{ id: '3', title: 'Sugar', completed: true },
			{ id: '4', title: 'Salt', completed: false },
			{ id: '5', title: 'Eggs', completed: true }
		])
	})

	test('select the filter', () => {
		const selectedFilter = getFilter(initialState)
		expect(selectedFilter).toBe('all')
	})

	test('select the active task count', () => {
		const selectedActiveTaskCount = getActiveTaskCount(initialState)
		expect(selectedActiveTaskCount).toBe(2)
	})
})
