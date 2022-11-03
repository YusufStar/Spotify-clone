import React from 'react'
import SongItem from './SongItem'

import { NavLink } from 'react-router-dom'

function Section({ title, more = false, items }) {


  return (
    <section>
        <header className='flex items-center justify-between mb-4 z-10'>
          <h3 className='text-2xl text-white font-semibold tracking-tight hover:underline'>{title}</h3>
          {more && (
            <NavLink className={"text-sm font-semibold uppercase text-link tracking-wide hover:underline"} to={more ?? '#'}>
              SEE ALL
            </NavLink>
          )}
        </header>
        <div className="grid grid-cols-6 gap-x-6">
          {items.map(item => <SongItem item={item} key={item.id}/>)}
        </div>
    </section>
  )
}

export default Section