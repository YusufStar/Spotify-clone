import React from 'react'
import { Icon } from 'Icons'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { setCurrent } from "stores/Player"

function SongItem({ item }) {
    const imageStyle = item => {
        switch (item.type) {
          case 'artist':
            return 'rounded-full';
    
          case 'podcast':
            return 'rounded-xl'
    
          default:
            return 'rounded';
    
        }
      }

      const dispatch = useDispatch()
      const { current, playing } = useSelector(state => state.player)
      const updateCurrent = () => {
        dispatch(setCurrent(item))
      }

  return (
        <NavLink key={item.id} to="/" className={"bg-footer hover:bg-active p-4 rounded group"}>
          <div className="pt-[100%] relative mb-4">
            <img src={item.image} className={`absolute inset-0 object-cover h-full w-full ${imageStyle(item)}`} />
            <button
            onClick={updateCurrent}        
            className={`w-10 h-10 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center group-hover:flex group-focus:flex ${!(current?.id === item.id && playing) ? 'hidden':'flex'}`}>
              <Icon name={(current?.id === item.id && playing) ? 'pause':"play"} size={16}/>
            </button>
          </div>
          <h6 className='overflow-hidden overflow-ellipsis whitespace-normal text-base font-semibold'>
            {item.title}
          </h6>
          <p className='line-clamp-2 text-link text-sm mt-1'>
            {item.description}
          </p>
        </NavLink>
  )
}

export default SongItem