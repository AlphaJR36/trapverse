import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useTheme } from '@/components/theme-provider'

import { Logo as LogoDark } from '../assets/logo-dark'
import { Logo as LogoLight } from '../assets/logo-light'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const { theme } = useTheme()
  const Logo = theme === 'light' ? LogoDark : LogoLight

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Implement your search logic here, e.g., redirect to search results page
    console.log('Searching for:', searchQuery)
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 mr-6">
              <Logo width={150} />
            </Link>
            <div className="hidden md:flex md:ml-6">
              <Link
                to="/trend"
                className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Tendências
              </Link>
              <Link
                to="/popular"
                className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Populares
              </Link>
              <Link
                to="/about"
                className="text-gray-900 dark:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Sobre
              </Link>
            </div>
          </div>
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center ml-4"
          >
            <div className="mr-4">
              <input
                type="text"
                placeholder="Pesquisar música"
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="px-4 py-2 border rounded-md text-sm dark:bg-gray-700 dark:text-white"
              />
            </div>
            {/* Substitua o botão pelo ícone de pesquisa */}
            <button
              type="submit"
              className="bg-transparent border-none outline-none p-2"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 dark:text-gray-200" />
            </button>
          </form>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
