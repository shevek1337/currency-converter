import React from "react"
import GithubIcon from "../components/GithubIcon"
import LariIcon from "../components/LariIcon"
import LightIcon from "../components/LightIcon"
import DarkIcon from "../components/DarkIcon"
import { useGlobalContext } from "../../hooks/useGlobalContext"

const Header = (): React.ReactElement => {
  const { darkMode, toggle } = useGlobalContext()
  return (
    <nav className="bg-gray-50 flex justify-center dark:bg-gray-800">
      <div className="lg:max-w-screen-lg w-full py-4 flex items-center gap-4 dark:text-white">
        <div className="flex gap-2 items-center">
          <LariIcon className="w-8 h-8" />
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <button
            className="text-gray-700 dark:text-white"
            onClick={() => toggle()}
            title="თემის ცვლილება"
          >
            {darkMode ? (
              <DarkIcon className="h-6 w-6" />
            ) : (
              <LightIcon className="h-6 w-6" />
            )}
          </button>
          <a href="#" target="_blank">
            <GithubIcon className="fill-current text-black dark:text-white h-6 w-6" />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
