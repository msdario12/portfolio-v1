import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { LinkedinLink } from './LinkedinLink'
import { GitHubLink } from './GitHubLink'
import { EmailLink } from './EmailLink'

const LinkScrollTo = ({ id, title, setSelectedLink, selectedLink }) => {
  return (
    <a
      className={`font-medium  text-gray-500 hover:text-gray-200 sm:py-6 ${selectedLink === id
          ? 'dark:text-gray-100'
          : 'dark:text-gray-400'
        } dark:hover:text-gray-200`}
      href={id}
      onClick={(e) => {
        e.preventDefault()
        setSelectedLink(id)
        window.scrollTo({
          top: document.querySelector(id).offsetTop - 75,
          behavior: 'smooth',
        })
      }}
    >
      {title}
    </a>
  )
}

export const MainNavBar = () => {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const [selectedLink, setSelectedLink] = useState()
  // useEffect(() => {
  // 	return () => {
  // 		scrollY.onChange();
  // 	};
  // });
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 300) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })
  const variants = {
    show: { top: 0 },
    hidden: { top: -150 },
  }
  return (
    <motion.header
      animate={hidden ? 'show' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={`flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white py-3 sm:py-0 dark:bg-gray-900/10 ${hidden ? 'dark:bg-gray-900/90 ' : 'dark:bg-gray-900/10'
        } backdrop-blur-lg dark:border-gray-700 sticky inset-x-0 shadow-lg`}
    >
      <nav
        className={`relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8`}
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex items-center text-2xl font-bold dark:text-white bg-gradient-to-tl from-blue-600 to-violet-600 rounded-full p-1 aspect-square "
            href="#"
            aria-label="Dario Mansilla"
            onClick={(e) => {
              e.preventDefault()
              setSelectedLink('home')
              window.scrollTo({
                top:
                  document.querySelector('#home').offsetTop -
                  195,
                behavior: 'smooth',
              })
            }}
          >
            DM
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col font-bold text-lg gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <LinkScrollTo
              id={'#tech'}
              title={'Tecnologías'}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />
            <LinkScrollTo
              id={'#portfolio'}
              title={'Proyectos'}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />
            <LinkedinLink />
            <GitHubLink />
            <EmailLink />
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
