import { RefObject, useCallback } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'
import DescriptionIcon from '@mui/icons-material/Description'
import { Search } from '@mui/icons-material'
import html2canvas from 'html2canvas'

import { useTasksContext } from 'State/useTasks'
import { useSearchContext } from 'State/useSearch'
import { useCalendarContext } from 'State/useCalendar'
import LabelSearch from 'Calendar/Labels/LabelSearch'
import { AppInput } from 'Commons'

import MonthSelector from './MonthSelector'
import { ButtonsContainer, HeaderContent } from './styles'

type PropsT = {
  calendarRef: RefObject<HTMLDivElement>
}

const Header = ({ calendarRef }: PropsT) => {
  const { searchData, onSearchValue, onSearchLabel } = useSearchContext()
  const { calendarData } = useCalendarContext()
  const { tasksData } = useTasksContext()

  const onSearch = (value: string) => {
    onSearchValue({ value })
  }

  const _onSearchLabel = useCallback(
    (labelId: number | null) => {
      onSearchLabel({ labelId })
    },
    [onSearchLabel]
  )

  const handleDownloadImage = async () => {
    const element = calendarRef.current
    if (!element) return
    const canvas = await html2canvas(element)

    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a')

    link.href = data
    link.download = 'Calendar.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleDownloadJson = () => {
    const store = {
      calendarData,
      tasksData
    }
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(store))}`
    const link = document.createElement('a')
    link.href = jsonString
    link.download = 'store.json'

    link.click()
  }

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
        <IconButton onClick={handleDownloadImage}>
          <ImageIcon />
        </IconButton>
        <IconButton onClick={handleDownloadJson}>
          <DescriptionIcon />
        </IconButton>
      </ButtonsContainer>
    </HeaderContent>
  )
}

export default Header
