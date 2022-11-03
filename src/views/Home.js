import React from 'react'
import Section from 'components/Section'

function Home() {

  const items = [
    {
      id: 1,
      title: 'i am god!',
      description: 'i wanna burn shit',
      artist: 'Yusuf',
      image: 'https://i.scdn.co/image/ab67706c0000bebbea3a2559e16f7b37302af38a',
      type: 'album',
      src: 'https://freesound.org/data/previews/612/612095_5674468-lq.mp3'
    },
    {
      id: 2,
      title: 'Peaceful Piano',
      artist: 'Murat Abi',
      description: 'Relax and indulge with beautiful piano pieces',
      image: 'https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6',
      type: 'album',
      src: 'https://freesound.org/data/previews/612/612092_7037-lq.mp3'
    },
    {
      id: 3,
      title: 'Ceg',
      artist: 'Ceg',
      description: 'Artist',
      image: 'https://i.scdn.co/image/ab6761610000e5eb966d3501bcd640ce98937f56',
      type: 'artist',
      src: 'https://freesound.org/data/previews/612/612087_1648170-lq.mp3'
    },
    {
      id: 4,
      title: 'Intouchables - Soundtracks OST',
      artist: 'Gökhan Abi',
      description: 'Original Soundtrack',
      image: 'https://i.scdn.co/image/d39397d2f6a1525b3fe90369c89ea2d94aac5714',
      type: 'podcast',
      src: 'https://freesound.org/data/previews/612/612085_28867-lq.mp3'
    },
    {
      id: 5,
      title: 'Intouchables - Soundtracks OST',
      artist: 'Mehmet Abi',
      description: 'Original Soundtrack',
      image: 'https://i.scdn.co/image/ab67706c0000da84fcb8b92f2615d3261b8eb146',
      type: 'album',
      src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      id: 6,
      title: 'They tell me I am god',
      artist: 'Yusuf',
      description: 'Relax and indulge with beautiful piano pieces',
      image: 'https://i.scdn.co/image/ab67706c0000bebbda42d48324e00870535a3c61',
      type: 'album',
      src: 'https://freesound.org/data/previews/612/612092_7037-lq.mp3'
    },
  ]

  return (
    <div className='grid gap-y-8'>
      <Section title="Recently played" more="/blabla" items={items}/>
      <Section title="Shows to try" more="/blabla" items={items}/>
      <Section title="Made For Tayfun Erbilen" more="/blabla" items={items}/>
    </div>
  )
}

export default Home