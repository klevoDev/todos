import { TFilter } from 'core/types/main'
import { TaskType } from 'modules/main/main-types'

export const filteredTask = (
	tasks: TaskType[] | null | undefined,
	filter: TFilter
): TaskType[] => {
	if (!tasks) {
		return []
	}

	let taskArray = tasks
	if (filter === 'active') {
		taskArray = tasks.filter((task) => !task.completed)
	} else if (filter === 'completed') {
		taskArray = tasks.filter((task) => task.completed)
	}

	return taskArray
}
