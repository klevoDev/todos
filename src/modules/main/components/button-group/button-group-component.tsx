import { FC } from 'react'

import styles from './button-group.module.scss'

export interface IButtonGroupProps {}

export const ButtonGroupComponent: FC<IButtonGroupProps> = (props) => {
	console.log('ButtonGroup')

	return <>ButtonGroup</>
}
