import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import ThemeToggle from "./components/ThemeToggle"

function App() {

  return (
    <div className="
      overflow-hidden h-screen w-screen font-montserrat
      flex items-center justify-center flex-col
      rounded-2xl
      bg-gradient-to-b from-gray-300 to-gray-100 text-zinc-950
      dark:from-gray-950 dark:to-blue-custom dark:text-slate-50
    ">
      <div className="flex flex-col w-11/12 h-5/6">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <ThemeToggle />
        </div>
      </div>
  )
}

export default App
