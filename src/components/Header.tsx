import { useState } from 'react';

import Logo from '../assets/logoImage.svg';

import { Link } from 'react-router-dom';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-slate-800 rounded-md p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <img src={Logo} alt="Logo da Loja" className="w-36 h-auto"/>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="min-[320px]:flex-col min-[320px]:gap-0 text-sm lg:flex-row lg:gap-20 lg:flex-grow flex justify-center">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 text-teal-200 hover:text-blue-600 mr-4 font-bold"
            >
              Início
            </Link>
            <Link
              to="/allCarsByBrand"
              className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 text-teal-200 hover:text-blue-600 mr-4 font-bold"
            >
              Carros Pela Marca
            </Link>
            <Link
              to="/allCars"
              className="block mt-4 lg:inline-block lg:mt-0 transition duration-300 text-teal-200 hover:text-blue-600 mr-4 font-bold"
            >
              Todos os carros
            </Link>
          </div>
          <Link 
          to="/registerNewCar"
          className='min-[320px]:mt-4 min-[320px]:flex min-[320px]:justify-center lg:mt-0 lg:block text-white block transition duration-300 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Cadastrar Novo Carro</Link>
        </div>
      </nav>
    </header>
  );
}
