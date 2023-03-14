import { memo, useState } from 'react'
import { IconButton, Menu } from '@mui/material'
import LabelIcon from '@mui/icons-material/Label'

import { useTasksContext } from 'State/useTasks'
import { LabelInMenu, LabelSearched } from 'Header/styles'
import { CheckedIcon } from './styles'
import { colors } from '../../Theme'

type PropsT = {
  searchLabelId: number | null
  onLabelSearch: (labelId: number | null) => void
}

const LabelSearch = memo(({ searchLabelId, onLabelSearch }: PropsT) => {
  const { tasksData } = useTasksContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const selected = tasksData.labels.find(l => l.id === searchLabelId)

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      {!!selected && (
        <LabelSearched background={selected.color} onClick={() => onLabelSearch(null)}>
          {selected.text}
        </LabelSearched>
      )}
      <IconButton onClick={handleOpenMenu}>
        <LabelIcon style={{ color: colors.primary }} />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        anchorEl={anchorEl}
        onClick={handleCloseMenu}
        open={!!anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {tasksData.labels.map(label => (
          <LabelInMenu key={label.id} background={label?.color} onClick={() => onLabelSearch(label.id)}>
            {searchLabelId === label.id && <CheckedIcon />}
            {label.text}
          </LabelInMenu>
        ))}
      </Menu>
    </>
  )
})
export default LabelSearch
