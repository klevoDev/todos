import { FC } from 'react'
import { Box, Paper, Typography } from '@mui/material'

import { ButtonGroup } from '../button-group'
import { CreateTaskField } from '../create-task-field'
import { getHeading } from '../../main-selectors'
import { TaskList } from '../task-list'
import { useAppSelector } from 'core/hooks/redux'

export const TodoListComponent: FC = () => {
	const header = useAppSelector(getHeading)

	return (
		<Box marginTop={4} marginBottom={4}>
			<Paper elevation={3} sx={{ p: 2 }}>
				<Typography variant='h2' component='h1' align={'center'}>
					{header}
				</Typography>

				<CreateTaskField />
				<TaskList />
				<ButtonGroup />
			</Paper>
		</Box>
	)
}
