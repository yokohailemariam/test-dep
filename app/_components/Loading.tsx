import { CSSProperties } from "react"
import { MoonLoader } from "react-spinners"

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#00094B"
}

function LoadingSpinner() {
  return (
    <div className="sweet-loading">
      <MoonLoader
        color={"#00094B"}
        loading={true}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default LoadingSpinner
