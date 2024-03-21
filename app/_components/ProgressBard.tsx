import React, { Key } from "react"
import { motion } from "framer-motion"

interface ProgressBarProps {
  progress: number
  key: Key | null | undefined
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const progressPercentage = (progress / 100) * 100

  // Function to generate color based on progress percentage
  const getColor = (percentage: number) => {
    const blue = Math.min(255, Math.round((100 - percentage) * 2.55))
    const green = Math.min(255, Math.round(percentage * 2.55))
    const color = `rgb(0, ${green}, ${blue})`
    return color
  }

  return (
    <div className="flex items-center w-full h-6 bg-white rounded-lg">
      <motion.div
        animate={{
          width: `${progressPercentage}%`,
          backgroundColor: getColor(progressPercentage)
        }}
        transition={{ duration: 1 }}
        className="h-full rounded-md"
      />
      <span className="ml-4">{progress}%</span>
    </div>
  )
}

export default ProgressBar
