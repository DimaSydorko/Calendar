import { useCallback, useReducer } from 'react'

import { ContextT } from './index'

export type SearchValuePropsT = { value: string }
export type SearchLabelPropsT = { labelId: number | null }

export type SearchStateT = {
  value: string
  labelId: number | null
}

export type ActionT =
  | { type: 'SEARCH_VALUE'; payload: SearchValuePropsT }
  | { type: 'SEARCH_LABEL'; payload: SearchLabelPropsT }

const initialState: SearchStateT = {
  value: '',
  labelId: null
}

const searchReducer = (state: SearchStateT, { type, payload }: ActionT): SearchStateT => {
  switch (type) {
    case 'SEARCH_LABEL':
    case 'SEARCH_VALUE':
      return { ...state, ...payload }
    default:
      return state
  }
}

const useSearch = (): ContextT => {
  const [searchData, dispatch] = useReducer(searchReducer, initialState)

  const onSearchValue = useCallback((payload: SearchValuePropsT) => {
    dispatch({ type: 'SEARCH_VALUE', payload })
  }, [])

  const onSearchLabel = useCallback((payload: SearchLabelPropsT) => {
    dispatch({ type: 'SEARCH_LABEL', payload })
  }, [])

  return { searchData, onSearchValue, onSearchLabel }
}

export default useSearch
