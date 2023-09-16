import { createSelector } from 'reselect'

import { TRootState } from 'core/types/redux'

const getMainState = (state: TRootState) => state.main

export const getHeading = createSelector(getMainState, (main) => main.heading)

export const getTasks = createSelector(getMainState, (main) => main.tasks)

export const getFilter = createSelector(getMainState, (main) => main.filter)

export const getActiveTaskCount = createSelector(
	getTasks,
	(tasks) => tasks.filter((task) => !task.completed).length
)
