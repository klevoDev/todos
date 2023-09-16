import { ChangeEvent, FC } from 'react'
import { Checkbox, ListItemButton } from '@mui/material'
import { useDispatch } from 'react-redux'

import { changeTaskStatusAC } from '../../main-actions'
import { getFilter, getTasks } from '../../main-selectors'
import { useAppSelector } from 'core/hooks/redux'
import { filteredTask } from '../todo-list/todo-list-utils'

export const TaskComponent: FC = () => {
	const dispatch = useDispatch()

	let tasks = useAppSelector(getTasks)
	const filter = useAppSelector(getFilter)

	const taskArray = filteredTask(tasks, filter)

	const taskList = taskArray.map((task) => {
		const changeTaskStatus = (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(changeTaskStatusAC(task.id, event.currentTarget.checked))
		}

		return (
			<ListItemButton key={task.id}>
				<Checkbox checked={task.completed} onChange={changeTaskStatus} />
				{task.title}
			</ListItemButton>
		)
	})
	return <>{taskList}</>
}
