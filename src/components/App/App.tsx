import { Router } from "../Router/Router"
import { store } from "../../redux/store"
import React, { FC } from "react"
import { Provider } from "react-redux"
import "./App.css"
// import { client } from "./ConnectDB";

const AuthWrapper: FC<React.PropsWithChildren> = ({ children }) => {
  // useAuthService()

  return <>{children}</>
}

export const App: FC = () => {
  return (
    <Provider store={store}>
      <AuthWrapper>
        <Router />
      </AuthWrapper>
    </Provider>
  )
}
