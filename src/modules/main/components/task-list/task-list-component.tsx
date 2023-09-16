import { FC } from 'react'
import { List } from '@mui/material'

import { getFilter, getTasks } from '../../main-selectors'
import { useAppSelector } from 'core/hooks/redux'
import { filteredTask } from './task-list-utils'
import { Task } from '../task'

export const TaskListComponent: FC = () => {
	const tasks = useAppSelector(getTasks)
	const filter = useAppSelector(getFilter)

	const taskArray = filteredTask(tasks, filter)

	const taskList = taskArray.map((task) => {
		return <Task key={task.id} {...task} />
	})
	return <List>{taskList}</List>
}
