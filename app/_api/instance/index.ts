import { BASEURL, IPAPIBASEURL } from '@/lib/utils/constants'
import axios from 'axios'

export const apiInstance = axios.create({
  baseURL: BASEURL
})

export const ipApiInstance = axios.create({
  baseURL: IPAPIBASEURL
})
