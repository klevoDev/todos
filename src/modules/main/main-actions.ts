import { v4 } from 'uuid'

import { FilterType } from '../../components/todo-list/todo-list-types'

export const changeTaskStatusAC = (taskId: string, isDone: boolean) => ({
	type: 'main/CHANGE-TASK-STATUS' as const,
	payload: {
		taskId,
		isDone
	}
})

export const createTaskAC = (title: string) => ({
	type: 'main/CREATE-TASK' as const,
	payload: {
		taskId: v4(),
		title
	}
})

export const deleteTaskAC = (taskId: string) => ({
	type: 'main/DELETE-TASK' as const,
	payload: {
		taskId
	}
})

export const changeFilterAC = (filter: FilterType) => ({
	type: 'main/CHANGE-FILTER' as const,
	payload: {
		filter
	}
})
