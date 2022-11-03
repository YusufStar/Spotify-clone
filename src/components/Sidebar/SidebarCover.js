import { Icon } from 'Icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from 'stores/Player'

function SidebarCover() {
    const dispatch = useDispatch()
    const current = useSelector(state => state.player.current)

  return (
    <div className='pt-[100%] bg-black relative group'>
        <img src={current.image} alt="" className='w-full h-full object-cover absolute top-0 left-0'/>    
        <button onClick={() => dispatch(setSidebar(false))} className='w-6 h-6 bg-black -rotate-90 opacity-0 hover:scale-105 rounded-full z-20 group-hover:opacity-80 hover:opacity-100 absolute top-1 right-1 bg-opacity-80 flex items-center justify-center'>
            <Icon size={16} name="arrowLeft"/>
        </button>
    </div>
  )
}

export default SidebarCover