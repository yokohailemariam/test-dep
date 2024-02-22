/* Instruments */
import {
  identitySlice,
  homePageSlice,
  categorySlice,
  sponsorsSlice
} from "./slices"

export const reducer = {
  home: homePageSlice.reducer,
  category: categorySlice.reducer,
  identity: identitySlice.reducer,
  sponsor: sponsorsSlice.reducer
}
