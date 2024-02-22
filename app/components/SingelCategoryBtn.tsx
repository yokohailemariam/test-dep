import LoadingSpinner from "./Loading"

interface SingleCategoryBtnProps {
  loading: "idle" | "loading" | "rejected"
  selected: number
  ipv4: string
  finger_print: string
  voteCandidate: () => void
}

export const SingleCategoryBtn = ({
  loading,
  selected,
  ipv4,
  finger_print,
  voteCandidate
}: SingleCategoryBtnProps) => {
  return (
    <div className="flex gap-4 itesm-center justify-center mt-6">
      {loading === "loading" ? (
        <LoadingSpinner />
      ) : (
        <button
          type="button"
          className={`bg-white ${
            selected === 0 ? "text-gray-400" : "text-black"
          }  text-[18px] md:text-[24px] lg:text-[30px] px-6 rounded-full py-2 shadow-lg`}
          disabled={selected === 0 && !!ipv4 && !!finger_print}
          onClick={voteCandidate}
        >
          Vote
        </button>
      )}
    </div>
  )
}
