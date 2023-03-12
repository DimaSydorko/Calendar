import { instanceNager } from './index'
import { ApiResponse, HolidayT } from 'Utils/types'

const apiHolidays = {
  getWorldwide: async (): Promise<ApiResponse<HolidayT[]>> => {
    try {
      const response = await instanceNager.get<HolidayT[]>('NextPublicHolidaysWorldwide')
      return { data: response.data, err: null }
    } catch (error: any) {
      return { data: null, err: error.message }
    }
  }
}

export default apiHolidays
