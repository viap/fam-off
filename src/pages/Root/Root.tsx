import classNames from "classnames";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectTheme } from "./RootSelectors";

import "../../styles/themes.css";
import { Menu } from "../../components/Menu/Menu";

export const Root: FC = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className={classNames("root", "theme", `theme_${theme}`)}>
      <Menu />
      <Outlet />
    </div>
  );
};
