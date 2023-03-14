import React, { createContext, useContext } from 'react'

import useSearch, { SearchLabelPropsT, SearchStateT, SearchValuePropsT } from './useSearch'

export type ContextT = {
  searchData: SearchStateT
  onSearchValue: (arg: SearchValuePropsT) => void
  onSearchLabel: (arg: SearchLabelPropsT) => void
}

const SearchContext = createContext<ContextT>(null!)

export const useSearchContext = () => {
  return useContext(SearchContext)
}

export default function SearchProvider({ children }: any) {
  const value = useSearch()
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}
