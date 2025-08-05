import React from 'react'
import logo from '../assets/logo2.png'
import { NAVIGATION_LINKS } from '../constants'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'

function Navbar() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

   const toggleMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen)
   }

   const handleLink = (e, href) => {
      e.preventDefault()
      const targetElement = document.querySelector(href)
      if(targetElement) {
         const offset = -85
         const elementPosition = targetElement.getBoundingClientRect().top
         const offsetPosition = elementPosition + window.scrollY + offset

         window.scrollTo({
            top: offsetPosition, 
            behavior: "smooth" 
         })
      }
      setIsMobileMenuOpen(false)
   }

  return (
    <div className=''>
      <nav className='fixed left-0 right-0 top-0 z-50'>
         <div className='mx-auto hidden max-w-2xl items-center justify-center border border-stone-50/30 
         rounded-lg bg-black-/20 py-3 backdrop:-blur-lg lg:flex'>
            <div className="flex justify-between items-center gap-6">
               <div>
                  <a href="#">
                     <img src={logo} width={150}  alt="" />
                  </a>
               </div>
               <div>
                  <ul className='flex items-center gap-4 '>
                     {NAVIGATION_LINKS.map((item, index) => (
                        <li key={index}>
                           <a className='text-sm hover:text-yellow-400' href={item.href} 
                           onClick={(e) => handleLink(e, item.href)}>{item.label}</a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
         {/* Mobile Menu */}
         <div className='rounded-lg backdrop-blur-md lg:hidden'>
            <div className="flex items-center justify-between">
               <div>
                  <a href="#">
                     <img src={logo} alt="logo" width={90} className='m-2'/>
                  </a>
               </div>
               <div className="flex items-center ">
                  <button className='focus:outline-none lg:hidden' onClick={toggleMenu}>
                     {isMobileMenuOpen ? (<FaTimes className='m-2 h-6 w-5'/>) : 
                     (<FaBars className='m-2 h-6 w-5'/>)}
                  </button>
               </div>
            </div>
            {isMobileMenuOpen && (
               <ul className='ml-4 mt-4 flex flex-col gap-4 backdrop:blur-md'>
                  {NAVIGATION_LINKS.map((item, index) => (
                     <li key={index}>
                        <a href={item.href} className='block w-full text-lg' 
                        onClick={(e) => handleLink(e, item.href)}>
                           {item.label}
                        </a>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </nav>
    </div>
  )
}

export default Navbar