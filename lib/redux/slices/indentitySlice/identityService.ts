import { apiInstance } from '@/app/api/instance'
import { GetIpResponseType, VoteArtistArgs } from '@/lib/types'
import axios, { AxiosError } from 'axios'
export const getIPAddress = async () => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json')
    const result = response.data as GetIpResponseType
    return result.ip
  } catch (error) {
    throw error
  }
}

export const voteCandidate = async ({
  ipAddress: ipv4,
  fingerprint: finger_print,
  categoryId: category,
  candidateId: candidate
}: VoteArtistArgs) => {
  try {
    const res = await apiInstance.post('/vote/api/vote', {
      ipv4,
      finger_print,
      category,
      candidate
    })

    if (res.status === 201) {
      return res.data
    } else if (res.status === 404) {
      throw new Error('API endpoint not found')
    } else if (res.status === 400) {
      throw new Error('Already voted')
    } else {
      throw new Error('Something went wrong')
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.request.response
    }
    throw error
  }
}
