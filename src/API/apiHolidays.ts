import { instanceNager } from './index'
import { ApiResponseType, HolidayT } from 'Utils/types'

const apiHolidays = {
  getWorldwide: async (): Promise<ApiResponseType<HolidayT[]>> => {
    try {
      const response = await instanceNager.get<HolidayT[]>('NextPublicHolidaysWorldwide')
      return { data: response.data, err: null }
    } catch (error: any) {
      return { data: null, err: error.message }
    }
  }
}

export default apiHolidays
