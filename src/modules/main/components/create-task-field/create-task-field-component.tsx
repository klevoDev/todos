import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'
import { createTaskAC } from '../../main-actions'
import {
	EMPTY_FIELD_ERROR,
	MAX_LENGTH,
	MIN_LENGTH,
	TEXT_FIELD_ERROR,
	TEXT_FIELD_TITLE
} from './text-field-constants'
import SendIcon from '@mui/icons-material/Send'
import { useDispatch } from 'react-redux'

export const CreateTaskFieldComponent: FC = () => {
	const dispatch = useDispatch()
	const [value, setValue] = useState('')

	const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value)
	}

	const handleCreateTask = () => {
		if (value.length <= MAX_LENGTH && value.length !== MIN_LENGTH) {
			dispatch(createTaskAC(value))
			setValue('')
		} else if (value.length === MIN_LENGTH) {
			alert(EMPTY_FIELD_ERROR)
		}
	}

	const handleEnterCreateTask = (event: KeyboardEvent<HTMLInputElement>) => {
		event.key === 'Enter' && handleCreateTask()
	}

	return (
		<>
			<TextField
				value={value}
				onChange={handleChangeValue}
				onKeyDown={handleEnterCreateTask}
				id='standard-basic'
				label={TEXT_FIELD_TITLE}
				variant='standard'
			/>
			<Box
				sx={{
					height: 30
				}}
			>
				{value.length > MAX_LENGTH ? (
					<Typography variant='body1' color='error'>
						{TEXT_FIELD_ERROR}
					</Typography>
				) : (
					<Button
						variant='contained'
						endIcon={<SendIcon />}
						onClick={handleCreateTask}
						size='medium'
						sx={{ width: '100%' }}
					>
						Add
					</Button>
				)}
			</Box>
		</>
	)
}
