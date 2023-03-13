import { memo, useState } from 'react'
import { Checkbox } from '@mui/material'
import LabelIcon from '@mui/icons-material/Label'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { LabelT } from 'Utils/types'
import { AppInput, PrimaryButton } from 'Commons'
import { useTasksContext } from 'State/useTasks'
import { colors, getTaskColors } from 'Theme'
import { DeleteIconButton } from '../Task/styles'
import { AddTaskButton } from '../DayCell/styles'
import { CheckedIcon, Label, LabelContainer, LabelsMenu } from './styles'

type PropsT = {
  labelIds: number[]
  taskId?: number
  tasksKey?: string
  labels: LabelT[]
}

const initLabel: LabelT = {
  id: 0,
  color: getTaskColors(300)[0],
  text: ''
}

const LabelMenu = memo(({ labelIds, labels, taskId, tasksKey }: PropsT) => {
  const { onAddLabel, onUpdLabel, onToggleLabel } = useTasksContext()
  const [isLabelsMenu, setIsLabelsMenu] = useState<boolean>(false)
  const [_labelIds, setLabelIds] = useState<number[]>(labelIds)
  const [editLabel, setEditLabel] = useState<LabelT | null>(null)

  const onLabelSave = () => {
    if (!editLabel) return

    if (editLabel.id === 0) onAddLabel({ label: editLabel })
    else onUpdLabel({ label: editLabel })

    setEditLabel(null)
  }

  const onLabelsSave = () => {
    if (!taskId || !tasksKey) return
    onToggleLabel({ taskId, dateKey: tasksKey, labelIds: _labelIds })
    setIsLabelsMenu(false)
  }

  const onCheckLabel = (labelId: number, isChecked: boolean) => {
    setLabelIds(p => (isChecked ? p.filter(l => l !== labelId) : [...p, labelId]))
  }

  const onLabelTextChange = (text: string) => {
    setEditLabel(p => (p ? { ...p, text } : p))
  }

  const onLabelColorChange = (color: string) => {
    setEditLabel(p => (p ? { ...p, color } : p))
  }

  return (
    <>
      <DeleteIconButton onClick={() => setIsLabelsMenu(true)}>
        <LabelIcon style={{ color: colors.primary }} />
      </DeleteIconButton>
      {isLabelsMenu && (
        <LabelsMenu>
          {!editLabel ? (
            <>
              <AddTaskButton startIcon={<AddIcon />} onClick={() => setEditLabel(initLabel)}>
                Add Label
              </AddTaskButton>
              {labels.map(label => {
                const isChecked = _labelIds.includes(label.id)
                return (
                  <LabelContainer key={label.id}>
                    <Checkbox
                      style={{ padding: 0 }}
                      checked={isChecked}
                      onChange={() => onCheckLabel(label.id, isChecked)}
                    />
                    <Label fullWidth background={label.color} onClick={() => onCheckLabel(label.id, isChecked)}>
                      {label.text}
                    </Label>
                    <DeleteIconButton onClick={() => setEditLabel(label)}>
                      <EditIcon fontSize={'small'} />
                    </DeleteIconButton>
                  </LabelContainer>
                )
              })}
              <PrimaryButton fullWidth onClick={onLabelsSave}>
                Save
              </PrimaryButton>
            </>
          ) : (
            <>
              <AddTaskButton startIcon={<ArrowBackIcon />} onClick={() => setEditLabel(null)}>
                Back
              </AddTaskButton>
              <AppInput
                value={editLabel.text}
                inputProps={{ style: { padding: '2px 4px' } }}
                onChange={onLabelTextChange}
              />
              {getTaskColors(300).map(color => (
                <LabelContainer key={color}>
                  <Label fullWidth background={color} onClick={() => onLabelColorChange(color)}>
                    {editLabel?.color === color && <CheckedIcon />}
                    {editLabel?.text}
                  </Label>
                </LabelContainer>
              ))}
              <PrimaryButton fullWidth disabled={!editLabel?.text} onClick={onLabelSave}>
                Save
              </PrimaryButton>
            </>
          )}
        </LabelsMenu>
      )}
    </>
  )
})

export default LabelMenu
