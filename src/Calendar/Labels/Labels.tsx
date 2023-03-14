import { memo } from 'react'
import { LabelT } from 'Utils/types'
import { LabelsViewContainer, LabelView } from './styles'

type PropsT = {
  isInEdit?: boolean
  labelIds: number[]
  labels: LabelT[]
}

const Labels = memo(({ labelIds, labels, isInEdit = false }: PropsT) => {
  return !!labelIds.length ? (
    <LabelsViewContainer isInEdit={isInEdit}>
      {labelIds.map(id => {
        const label = labels.find(l => l.id === id)
        if (!label) return null
        return (
          <LabelView key={id} background={label.color + 'A0'}>
            {label.text}
          </LabelView>
        )
      })}
    </LabelsViewContainer>
  ) : null
})
export default Labels
