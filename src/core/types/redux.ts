import { store } from 'app/store/store'

export type TRootState = ReturnType<typeof store.getState>
