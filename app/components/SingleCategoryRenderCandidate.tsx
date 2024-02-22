import { HomeCategoryResType, VoteArtistArgs } from "@/lib/types"
import React, { Dispatch, SetStateAction } from "react"

import { AwardLogo } from "@/lib/utils/assets"
import { formatVotePercentage } from "@/lib/utils/helper"
import ProgressBar from "./ProgressBard"

export interface ICounteItem {
  count: number | null
  percentage: number | null
  candidateName: string | null
}

interface RenderCandidateProps {
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
  setImageUrl: Dispatch<SetStateAction<string>>
  setVote: Dispatch<SetStateAction<VoteArtistArgs>>
  setCountItem: Dispatch<SetStateAction<ICounteItem>>
  categoryDetail: HomeCategoryResType
  ip: string
  finger_print: string
}

const SingleCategoryRenderCandidate = ({
  categoryDetail,
  setSelected,
  setImageUrl,
  setVote,
  ip,
  finger_print,
  setCountItem,
  selected
}: RenderCandidateProps) => {
  return (
    <div className="flex flex-col gap-6 max-h-96 overflow-y-auto">
      {categoryDetail.candidates.length === 0 && (
        <p className="text-lg font-medium ">
          There is no candidate for this category
        </p>
      )}
      {categoryDetail.candidates.map((item) => (
        <div key={item.id}>
          <button
            key={item.candidate_name}
            onClick={() => {
              setSelected(item.id ?? 0)
              // setImageUrl(item.candidate_profileImage)

              setVote({
                ipAddress: ip,
                fingerprint: finger_print,
                categoryId: categoryDetail.id,
                candidateId: item.id
              })

              setCountItem({
                count: item.vote_count_in_the_category,
                percentage: item.vote_percentage_in_the_category,
                candidateName: item.candidate_name
              })

              if (selected === item.id) {
                setSelected(0)
                setImageUrl(AwardLogo)
              }
            }}
            type="button"
            className={`flex justify-evenly  border-2 border-black w-full mb-4 px-[14px] py-[4px] rounded-full gap-3 text-[18px] md:text-[24px] lg:text-[30px] ${
              selected === item.id ?? 0
                ? "transition-all duration-150 ease-in-out  bg-black text-white "
                : ""
            } transition-all duration-300 ease-in-out hover:bg-[#00094B] hover:text-white`}
          >
            <div className="flex w-full justify-between items-center">
              <p className="text-[18px] md:text-[26px]" key={item.id}>
                {item.candidate_name}
              </p>
              <p className="bg-white text-[#00094B] rounded-full p-2 text-center">
                {formatVotePercentage(item.vote_percentage_in_the_category)}%
              </p>
            </div>
          </button>
          <ProgressBar
            key={item.created_at}
            progress={formatVotePercentage(
              item.vote_percentage_in_the_category
            )}
          />
        </div>
      ))}
    </div>
  )
}

export default SingleCategoryRenderCandidate
