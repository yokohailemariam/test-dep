import { getCategories, useDispatch, useSelector } from "@/lib/redux"
import LoadingSpinner from "./Loading"
import Categories from "./Categories"
import { useEffect } from "react"

const CategoriesListView = () => {
  const dispatch = useDispatch()
  const { items, status } = useSelector((state) => state.home)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner />
      </div>
    )
  } else {
    return (
      <div className="md:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 md:gap-8 lg:gap-8">
        {items.map((item) => (
          <Categories
            key={item.id}
            title={item.category_name}
            id={item.id}
            imageUrl={item.category_coverImage}
          />
        ))}
      </div>
    )
  }
}

export default CategoriesListView
