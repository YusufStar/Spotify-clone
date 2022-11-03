import React from 'react'

function Playlists() {
  return (
    <div className='mx-6 mt-4 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto scrollbar scrollbar-thin scrollbar-thumb-link/50 scrollbar-thumb-rounded-xl'>
        <ul>
            {new Array(40).fill((i) => (<li>
                <a key={i} href="#" className='text-s text-link hover:text-white flex h-8 items-center'>
                    Tell Me I Am God
                </a>
            </li>))}
        </ul>
    </div>
  )
}

export default Playlists