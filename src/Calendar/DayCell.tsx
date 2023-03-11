import { memo } from 'react'

import { Day } from 'Commons'

type PropsT = {
  date?: Date
}

const DayCell = memo(({ date }: PropsT) => {
  const day = date?.getDate()

  return <Day>{day}</Day>
})

export default DayCell
