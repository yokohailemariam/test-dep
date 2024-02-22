import { HomeCategoryRes, VoteResultCategory } from "@/lib/types"
import { BASEURL } from "@/lib/utils/constants"

export const getHomeCategories = async () => {
  try {
    const response = await fetch(`${BASEURL}/vote/api/categoryNoCandidate`, {
      cache: "force-cache",
      next: {
        revalidate: 900
      }
    })

    if (!response.ok) {
      throw new Error(`Fetch request failed with status ${response.status}`)
    }

    const res = (await response.json()) as HomeCategoryRes
    return res.results
  } catch (error) {
    return error
  }
}

export const getVoteResults = async () => {
  try {
    const response = await fetch(`${BASEURL}/vote/api/category`, {
      cache: "force-cache",
      next: {
        revalidate: 900
      }
    })

    if (!response.ok) {
      throw new Error(`Fetch request failed with status ${response.status}`)
    }

    const res = (await response.json()) as VoteResultCategory[]
    return res
  } catch (error) {
    return error
  }
}
