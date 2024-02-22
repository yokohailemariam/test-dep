import { HomeCategoryNew, HomeCategoryResType } from "@/lib/types"
import { BASEURL } from "@/lib/utils/constants"

export const getSingleCategory = async (id: number) => {
  try {
    const response = await fetch(`${BASEURL}/vote/api/category/${id}`, {
      cache: "no-store"
    })

    if (response.status === 400) {
      throw new InvalidCategoryIdError(id)
    } else if (response.status === 404) {
      throw new CategoryNotFoundError(id)
    }

    if (!response.ok) {
      throw new Error(`Fetch request failed with status ${response.status}`)
    }

    const data = (await response.json()) as HomeCategoryResType

    if (!data.id) {
      throw new InvalidCategoryIdError(id)
    }

    return data
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
  }
}

export const getVoteCategories = async () => {
  try {
    const response = await fetch(`${BASEURL}/vote/api/category`, {
      next: {
        revalidate: 30
      }
    })

    if (!response.ok) {
      throw new Error(`Fetch request failed with status ${response.status}`)
    }

    const res = (await response.json()) as HomeCategoryNew
    return res.results
  } catch (error) {
    return error
  }
}

class InvalidCategoryIdError extends Error {
  constructor(id: number) {
    super(`Invalid category id ${id}`)
  }
}

class CategoryNotFoundError extends Error {
  constructor(id: number) {
    super(`Category not found for id ${id}`)
  }
}
