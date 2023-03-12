import axios from 'axios'

export const instanceNager = axios.create({
  baseURL: 'https://date.nager.at/api/v3/'
})
