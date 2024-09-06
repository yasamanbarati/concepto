import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from './root-reducer'
import { AppDispatch } from '.'
// @ts-ignore
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
