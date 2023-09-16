import React from 'react'

import { TodoList } from 'modules/main/components/todo-list'
import { DemoBlock } from 'components/demo-block'

export const MainComponent = () => {
	return (
		<DemoBlock>
			<TodoList />
		</DemoBlock>
	)
}
