import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../Components/common/NavbarComponent'


const MainLayout = () => {
  return (
    <>
      <header>
        <NavbarComponent/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
       
      </footer>
    </>
  )
}

export default MainLayout
