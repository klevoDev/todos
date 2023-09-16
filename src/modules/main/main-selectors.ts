import { TRootState } from 'core/types/redux'
import { createSelector } from 'reselect'

const getMainState = (state: TRootState) => state.main

export const getHeader = (state: TRootState) => state.main.heading

export const getTasks = (state: TRootState) => state.main.tasks

export const getActiveTaskCount = createSelector(
	getMainState,
	(main) => main.tasks?.filter((task) => !task.completed).length ?? 0
)

export const getFilter = (state: TRootState) => state.main.filter
