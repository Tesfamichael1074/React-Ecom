

function NavBar() {

    const ChangeTheme = (e: any) => {

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }

    }

  return (
    <nav className=" fixed w-screen px-2 sm:px-4 py-2.5 bg-gray-300 dark:bg-gray-900 shadow-md dark:shadow-slate-700/30">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <a href="https://flowbite.com/" className="flex items-center">
                  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Addis-Ecom</span>
              </a>
              
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col bg-gray-300 dark:bg-gray-900 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                  <li>
                    <a href="#" className="block p-4 mt-2 py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" className="block p-4 mt-2 py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                  </li>
                  <li>
                    <label htmlFor="default-toggle" className="inline-flex mt-2 relative items-center cursor-pointer">
                      <input type="checkbox" onChange={ChangeTheme} value="" id="default-toggle" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                    </label>
                  </li>
                  <li>
                    <button type="button" className="text-white dark:bg-gray-600 bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                      Sign in 
                    </button>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
  )
}

export default NavBar