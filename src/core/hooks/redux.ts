import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TRootState } from 'core/types/redux'

export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector
