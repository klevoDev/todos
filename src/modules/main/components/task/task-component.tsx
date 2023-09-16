import { ChangeEvent, FC, memo } from 'react'
import { Checkbox, ListItemButton } from '@mui/material'
import { useDispatch } from 'react-redux'

import { ITaskProps } from './task-types'
import { changeTaskStatusAC } from '../../main-actions'

export const TaskComponent: FC<ITaskProps> = memo(
	({ id, title, completed }) => {
		const dispatch = useDispatch()

		const changeTaskStatus = (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(changeTaskStatusAC(id, event.currentTarget.checked))
		}

		return (
			<ListItemButton>
				<Checkbox checked={completed} onChange={changeTaskStatus} />
				{title}
			</ListItemButton>
		)
	}
)
