import React, { FC } from 'react'

import { IDemoBlockProps } from './demo-block-types'

import styles from './demo-block.module.css'

export const DemoBlockComponent: FC<IDemoBlockProps> = ({ children }) => {
	return <div className={styles.demoBlock}>{children}</div>
}
