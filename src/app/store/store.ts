import { combineReducers, legacy_createStore as createStore } from 'redux'
import { mainReducer } from 'modules/main/main-reducer'

const rootReducer = combineReducers({
	main: mainReducer
})

export const store = createStore(rootReducer)
