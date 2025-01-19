'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  'https://github.com/simoncwang': {
    name: 'github',
  },
  'https://simoncwang.github.io/': {
    name: 'technical portfolio',
  },
}

function MoonIcon() {
  return (
    <FontAwesomeIcon icon={faMoon} />
  )
}

function SunIcon() {
  return (
    <FontAwesomeIcon icon={faSun} />
  );
}


export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Function to toggle dark mode by toggling the `dark` class on the `html` element
  const toggleTheme = () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', currentTheme === 'dark')
    localStorage.setItem('theme', currentTheme) // Store the theme in localStorage
    setIsDarkMode(currentTheme === 'dark') // Update state
  }

  // Update isDarkMode state when component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      const isDark = savedTheme === 'dark'
      setIsDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // Default to dark mode if no theme is saved
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    }
  }, [])

  return (
    <aside className="nav-container -ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-2 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {name}
              </Link>
            ))}
          </div>
          
          {/* Dark Mode Toggle Button with sun and moon icons */}
          <button
            onClick={toggleTheme}
            className="p-2 pl-6"
          >
            {isDarkMode ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
          </button>
        </nav>

        <hr></hr>
      </div>
    </aside>
  )
}
