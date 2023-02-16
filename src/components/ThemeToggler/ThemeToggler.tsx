import { Select } from "antd"
import classNames from "classnames"
import { FC } from "react"
import { useSelector } from "react-redux"
import { selectTheme } from "../../pages/Root/RootSelectors"
import { setTheme } from "../../pages/Root/RootSlice"
import { useAppDispatch } from "../../redux/hooks"
import { Themes } from "../../types/common"

import styles from "./ThemeToggler.module.css"

export const ThemeToggler: FC = () => {
  const dispatch = useAppDispatch()

  const theme = useSelector(selectTheme)
  const themes = Object.entries(Themes)

  return (
    <div className={classNames(styles.themeToggler)}>
      <Select
        defaultValue={theme}
        style={{ width: 120 }}
        onChange={(theme: Themes) => {
          dispatch(setTheme(theme))
        }}
        options={themes.map((theme) => {
          return {
            value: theme[1],
            label: theme[1],
          }
        })}
      ></Select>
    </div>
  )
}
