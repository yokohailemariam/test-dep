export const formatVotePercentage = (response: number) => {
  // Check if the value is 0.0, return 0
  if (response === 0.0) {
    return 0
  } else {
    // If not, use toFixed to limit decimal places to 2
    return parseFloat(response.toFixed(2))
  }
}
