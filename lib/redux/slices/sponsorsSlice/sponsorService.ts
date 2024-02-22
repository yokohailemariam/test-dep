import { BASEURL } from "@/lib/utils/constants"

export interface ISponsor {
  count: number
  next?: any
  previous?: any
  results: SponsorResult[]
}

export interface SponsorResult {
  id: number
  name: string
  image?: any
}

export const getSponsorsApi = async (): Promise<SponsorResult[]> => {
  try {
    const response = await fetch(`${BASEURL}/accounts/api/sponsors`, {
      next: {
        revalidate: 1600
      }
    })

    if (!response.ok) {
      throw new Error(`Fetch request failed with status ${response.status}`)
    }

    const res = (await response.json()) as ISponsor
    return res.results
  } catch (error) {
    throw error
  }
}
