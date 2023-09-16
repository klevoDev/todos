import { ChangeEvent, FC, useState, KeyboardEvent } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { useDispatch, useSelector } from 'react-redux'
import {
	Alert,
	Box,
	Button,
	ButtonGroup,
	Checkbox,
	List,
	ListItemButton,
	Paper,
	Snackbar,
	Stack,
	Typography,
	TextField
} from '@mui/material'

import {
	changeFilterAC,
	changeTaskStatusAC,
	createTaskAC,
	deleteCompetedTasksAC
} from 'modules/main/main-actions'
import { EMPTY_FIELD_ERROR, TEXT_FIELD_TITLE } from './todo-list-constants'
import { TRootState } from 'core/types/redux'

export const TodoListComponent: FC = () => {
	const dispatch = useDispatch()
	const header = useSelector((state: TRootState) => state.main.heading)
	const tasks = useSelector((state: TRootState) => state.main.tasks)
	const activeTaskCount = useSelector(
		(state: TRootState) =>
			state.main.tasks?.filter((task) => !task.completed).length ?? 0
	)

	const filter = useSelector((state: TRootState) => state.main.filter)

	// TODO: Вынести в utils
	let taskArray = tasks
	if (filter === 'active') {
		taskArray = tasks.filter((task) => !task.completed)
	} else if (filter === 'completed') {
		taskArray = tasks.filter((task) => task.completed)
	}

	// TODO: Создать компоненту Task
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

	const [openError, setOpenError] = useState(false)
	const [value, setValue] = useState('')

	const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value)
	}

	const handleCreateTask = () => {
		if (value.length <= 50 && value.length !== 0) {
			dispatch(createTaskAC(value))
			setValue('')
		} else if (value.length === 0) {
			setOpenError(true)
		}
	}

	const handleClose = () => {
		setOpenError(false)
	}

	const handleEnterCreateTask = (event: KeyboardEvent<HTMLInputElement>) => {
		event.key === 'Enter' && handleCreateTask()
	}

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
		<Box marginTop={4} marginBottom={4}>
			<Paper elevation={3} sx={{ p: 2 }}>
				<Typography variant='h2' component='h1' align={'center'}>
					{header}
				</Typography>

				<Stack spacing={3}>
					<TextField
						value={value}
						onChange={handleChangeValue}
						onKeyDown={handleEnterCreateTask}
						id='standard-basic'
						label={TEXT_FIELD_TITLE}
						variant='standard'
					/>

					{value.length > 50 ? ( // Дать название и вынести в const
						<Button
							variant='contained'
							endIcon={<SendIcon />}
							onClick={handleCreateTask}
							size='large'
							disabled={true}
						>
							Add
						</Button>
					) : (
						<Button
							variant='contained'
							endIcon={<SendIcon />}
							onClick={handleCreateTask}
							size='large'
						>
							Add
						</Button>
					)}
				</Stack>

				<List>{taskList}</List>

				<Stack direction='row' spacing={3}>
					<Typography variant='h6'>{activeTaskCount} items left</Typography>
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

				<Snackbar
					open={openError}
					autoHideDuration={3000}
					onClose={handleClose}
				>
					<Alert severity='error' onClose={handleClose}>
						{EMPTY_FIELD_ERROR}
					</Alert>
				</Snackbar>
			</Paper>
		</Box>
	)
}
