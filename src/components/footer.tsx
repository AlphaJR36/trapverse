// src/components/Footer.tsx

import { Link } from 'react-router-dom'

import { Logo } from '@/assets/logo-light'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-xl font-bold text-white">
              <Logo width={170} />
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              © {new Date().getFullYear()} Todos os Direitos Reservados.
            </p>
          </div>
          <div className="flex">
            <Link
              to="/about"
              className="text-gray-400 hover:text-white px-3 py-2"
            >
              Sobre Nós
            </Link>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-white px-3 py-2"
            >
              Privacidade
            </Link>
            <Link
              to="https://github.com/AlphaJR36"
              className="text-gray-400 hover:text-white px-3 py-2"
            >
              Contato
            </Link>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          <p>Made with &#9829; by Guilherme & Carolina</p>
        </div>
      </div>
    </footer>
  )
}
