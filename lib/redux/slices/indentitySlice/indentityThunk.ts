import { createAsyncThunk } from '@reduxjs/toolkit'
import { getIPAddress, voteCandidate } from './identityService'
import { VoteArtistArgs } from '@/lib/types'

//get user ip address
export const getVotersIpAddress = createAsyncThunk(
  'identity/getIpAddress',
  async () => {
    const res = await getIPAddress()
    return res
  }
)

export const voteCandidates = createAsyncThunk(
  'vote/voteForCandidate',
  async (args: VoteArtistArgs) => {
    try {
      const res = await voteCandidate(args)
      return res
    } catch (error) {
      throw error
    }
  }
)
