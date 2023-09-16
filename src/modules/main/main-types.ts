import {
	changeFilterAC,
	changeTaskStatusAC,
	createTaskAC,
	deleteCompetedTasksAC
} from './main-actions'
import { TFilter } from 'core/types/main'

export interface IMainState {
	heading: string
	filter: TFilter
	tasks: ITask[]
}

export type TodoListAT =
	| ReturnType<typeof changeTaskStatusAC>
	| ReturnType<typeof createTaskAC>
	| ReturnType<typeof deleteCompetedTasksAC>
	| ReturnType<typeof changeFilterAC>

export interface ITask {
	id: string
	title: string
	completed: boolean
}
