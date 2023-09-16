import { v4 } from 'uuid'

import { TFilter } from 'core/types/main'

export const changeFilterAC = (filter: TFilter) => ({
	type: 'main/CHANGE-FILTER' as const,
	payload: {
		filter
	}
})

export const changeTaskStatusAC = (taskId: string, completed: boolean) => ({
	type: 'main/CHANGE-TASK-STATUS' as const,
	payload: {
		taskId,
		completed
	}
})

export const createTaskAC = (title: string) => ({
	type: 'main/CREATE-TASK' as const,
	payload: {
		taskId: v4(),
		title
	}
})

export const deleteCompetedTasksAC = () => ({
	type: 'main/DELETE-COMPLETED-TASKS' as const
})
