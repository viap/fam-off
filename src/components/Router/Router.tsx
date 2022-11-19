import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Index } from "../../pages/Index/Index";
import { Root } from "../../pages/Root/Root";

export const prefix = document.getElementById("app-shell")
  ? "/transactions/"
  : "/";

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Root />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
