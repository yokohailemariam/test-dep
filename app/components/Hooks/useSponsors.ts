import { useDispatch, useSelector } from "@/lib/redux"
import { getSponsorsAsync } from "@/lib/redux/slices/sponsorsSlice"
import { useEffect } from "react"

const useSponsors = () => {
  const dispatch = useDispatch()

  const { sponsors, status } = useSelector((state) => state.sponsor)

  useEffect(() => {
    dispatch(getSponsorsAsync())
  }, [dispatch])

  return { sponsors, status }
}

export default useSponsors
