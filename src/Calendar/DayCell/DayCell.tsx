import { memo } from 'react'
import { Day, DayIdx } from './styles'

type PropsT = {
  date?: Date
}
const currentDate = new Date().getDate()
const currentMonth = new Date().getMonth()
const currentYear = new Date().getFullYear()

const DayCell = memo(({ date }: PropsT) => {
  const day = date?.getDate()
  const month = date?.getMonth()
  const year = date?.getFullYear()
  const isCurrent = currentDate === day && currentMonth === month && year === currentYear

  return (
    <Day isCurrent={isCurrent} onDoubleClick={() => {}}>
      <DayIdx isCurrent={isCurrent}>{day}</DayIdx>
    </Day>
  )
})

export default DayCell
