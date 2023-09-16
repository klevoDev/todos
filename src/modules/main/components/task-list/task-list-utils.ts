import { TFilter } from 'core/types/main'
import { ITask } from '../../main-types'

export const filteredTask = (
	tasks: ITask[] | null | undefined,
	filter: TFilter
): ITask[] => {
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
