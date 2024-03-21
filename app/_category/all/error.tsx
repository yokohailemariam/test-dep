"use client"
import Link from "next/link"
import { useEffect } from "react"

const Error = ({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-5xl font-bold">Ooops</p>

        <p className="text-xl font-thin">Something went wrong</p>
        <Link
          href={"/"}
          className="rounded-full shadow-sm px-10 py-4 transition-shadow duration-500 hover:shadow-2xl hover:cursor-pointer"
          onClick={() => reset()}
        >
          Try Again
        </Link>
      </div>
    </div>
  )
}

export default Error
