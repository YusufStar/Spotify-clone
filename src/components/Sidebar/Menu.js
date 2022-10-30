import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from "../../Icons"

function Menu() {

    let activeClassName = "bg-active text-white h-10 gap-x-4 flex items-center font-semibold text-link hover:text-white px-4 rounded";

  return (
    <nav className='px-2'>
        <ul className='flex flex-col'>
            <li>
                <NavLink to={"/"} end className={({ isActive }) => isActive ? activeClassName : "h-10 gap-x-4 flex items-center font-semibold text-link hover:text-white px-4 rounded"}>
                    <span>
                        <Icon name="home"/>
                    </span>
                    Ana sayfa
                </NavLink>
            </li>
            <li>
            <NavLink to={"/search"} className={({ isActive }) => isActive ? activeClassName : "h-10 gap-x-4 flex items-center font-semibold text-link hover:text-white px-4 rounded"}>
                    <span>
                        <Icon name="search"/>
                    </span>
                    Ara
                </NavLink>
            </li>
            <li>
            <NavLink to={"/collection"} className={({ isActive }) => isActive ? activeClassName : "h-10 gap-x-4 flex items-center font-semibold text-link hover:text-white px-4 rounded"}>
                    <span>
                        <Icon name="collection"/>
                    </span>
                    Kitaplığım
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu