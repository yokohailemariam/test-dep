import { AwardLogo } from "@/lib/utils/assets"
import Image from "next/image"

interface DipslayImageProps {
  imageUrl: string
  className: string | undefined
  artistName?: string | null
}

export const DisplayImage = ({
  imageUrl,
  className,
  artistName
}: DipslayImageProps) => {
  return (
    <Image
      src={imageUrl || AwardLogo}
      alt={artistName || "artist image"}
      width={400}
      height={400}
      placeholder="blur"
      blurDataURL={AwardLogo}
      className={className}
    />
  )
}
