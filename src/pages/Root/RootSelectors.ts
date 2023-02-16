import { RootState } from "../../redux/store"
import { Themes } from "../../types/common"

export const selectTheme = (state: RootState): Themes => state.root.theme
