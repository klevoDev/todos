import { FC } from 'react'
import { Button, ButtonGroup, Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

import { changeFilterAC, deleteCompetedTasksAC } from '../../main-actions'
import { getActiveTaskCount } from '../../main-selectors'
import { useAppSelector } from 'core/hooks/redux'

export const ButtonGroupComponent: FC = () => {
	const dispatch = useDispatch()
	const activeTaskCount = useAppSelector(getActiveTaskCount)

	const handleFilterAll = () => {
		dispatch(changeFilterAC('all'))
	}

	const handleFilterActive = () => {
		dispatch(changeFilterAC('active'))
	}

	const handleFilterCompleted = () => {
		dispatch(changeFilterAC('completed'))
	}

	const handleDeleteTask = () => {
		dispatch(deleteCompetedTasksAC())
	}

	return (
		<Stack direction='row' spacing={2}>
			<Typography variant='subtitle1'>{activeTaskCount} items left</Typography>
			<ButtonGroup
				variant='contained'
				aria-label='outlined primary button group'
			>
				<Button onClick={handleFilterAll}>all</Button>
				<Button onClick={handleFilterActive}>active</Button>
				<Button onClick={handleFilterCompleted}>completed</Button>
			</ButtonGroup>
			<Button onClick={handleDeleteTask}>clear completed</Button>
		</Stack>
	)
}
