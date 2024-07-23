import { ReactNode, useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../state/store"

const ThemeWrapper = ({ children }: {children: ReactNode}) => {
  const theme = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },  [theme])


  return (
    <>
      {children}
    </>
  )
}

export default ThemeWrapper
