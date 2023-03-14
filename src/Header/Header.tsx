import { useCallback } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import DescriptionIcon from '@mui/icons-material/Description'
import { Search } from '@mui/icons-material'

import { useSearchContext } from 'State/useSearch'
import { AppInput } from 'Commons'

import MonthSelector from './MonthSelector'
import LabelSearch from '../Calendar/Labels/LabelSearch'
import { ButtonsContainer, HeaderContent } from './styles'

const Header = () => {
  const { searchData, onSearchValue, onSearchLabel } = useSearchContext()

  const onSearch = (value: string) => {
    onSearchValue({ value })
  }

  const _onSearchLabel = useCallback(
    (labelId: number | null) => {
      onSearchLabel({ labelId })
    },
    [onSearchLabel]
  )

  return (
    <HeaderContent>
      <MonthSelector />
      <AppInput
        value={searchData.value}
        variant='outlined'
        inputMode='search'
        autoComplete='off'
        placeholder='Search tasks'
        onChange={onSearch}
        InputProps={{
          style: { height: 32 },
          startAdornment: (
            <InputAdornment position='end'>
              <Search style={{ color: '#4372DF' }} />
            </InputAdornment>
          )
        }}
        style={{ maxWidth: 400 }}
      />
      <ButtonsContainer>
        <LabelSearch searchLabelId={searchData.labelId} onLabelSearch={_onSearchLabel} />
        <IconButton>
          <ImageIcon />
        </IconButton>
        <IconButton>
          <DescriptionIcon />
        </IconButton>
      </ButtonsContainer>
    </HeaderContent>
  )
}

export default Header
