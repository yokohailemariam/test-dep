import { motion } from "framer-motion"

const ImageSlide = ({ imageUrl }: { imageUrl: string }) => {
  const variants = {
    hidden: {
      x: "20vw",
      scale: 0.2,
      rotate: 45
    },
    visible: {
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0,
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className=" drop-shadow-2xl">
      <motion.img
        src={imageUrl}
        variants={variants}
        initial="hidden"
        animate="visible"
        // className="w-full h-full"
        alt="leza awards logo"
      />
      <div className="shadow-2xl w-44 mt-10"></div>
    </div>
  )
}

export default ImageSlide
