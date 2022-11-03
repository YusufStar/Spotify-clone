import CustomRange from 'components/CustomRange';
import { Icon } from 'Icons'
import React, { useEffect, useMemo } from 'react'
import { useAudio } from 'react-use';
import { useDispatch, useSelector } from "react-redux"
import { SecondsToTime } from "../../Utils"
import { setControls, setPlaying, setSidebar } from "stores/Player"

function Player() {

    const dispatch = useDispatch()
    const { current, sidebar } = useSelector(state => state.player)

    const [audio, state, controls, ref] = useAudio({
        src: current?.src
    })

    useEffect(() => {
        controls.play()
    }, [current])

    useEffect(() => {
        dispatch(setControls(controls))
    }, [])

    useEffect(() => {
        dispatch(setPlaying(state.playing))
    }, [state.playing])

    const VolumeIcon = useMemo(() => {
        if (state.volume === 0) {
            return "volumeMuted"
        } else if (state?.muted) {
            return "volumeMuted"
        } else if (state.volume > 0 && state.volume < 0.33) {
            return "volumeLow"
        } else if (state.volume >= 0.33 && state.volume < 0.66) {
            return "volumeNormal"
        } else {
            return "volumeFull"
        }
    }, [state.volume])

  return (
    <div className='flex px-4 justify-between items-center h-full'>
        <div className="min-w-[11.25rem] w-[30%] flex items-center">
            <div className="w-14 h-14">
                {current && (
                    <div className='flex items-center'>
                    <div className='flex items-center mr-3'>
                        {!sidebar && (
                        <div className="w-14 h-14 mr-3 flex-shrink-0 group relative">
                            <img src={current.image} alt=""/>
                            <button onClick={() => dispatch(setSidebar(true))} className='w-6 h-6 bg-black rotate-90 opacity-0 hover:scale-105 rounded-full z-20 group-hover:opacity-80 hover:opacity-100 absolute top-1 right-1 bg-opacity-80 flex items-center justify-center'>
                                <Icon size={16} name="arrowLeft"/>
                            </button>
                        </div>
                        )}
                        <div className="">
                            <h6 className='text-sm line-clamp-1'>{current.title}</h6>
                            <p className='text-[0.688rem] text-white text-opacity-70'>{current.artist}</p>
                        </div>
                    </div>
                    <button className='w-8 h-8 flex items-center mr-3 justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="heart"/>
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="pictureInPicture"/>
                    </button>
                    </div>
                )}
            </div>
        </div>
        <div className="max-w-[45.125rem] w-[40%] pt-2 flex flex-col items-center">
            <div className="flex items-center gap-x-2">
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="shuffle"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="playerPrev"/>
                </button>
                <button onClick={controls[state?.playing ? "pause":"play"]} className='w-8 h-8 flex bg-white text-black rounded-full items-center justify-center hover:scale-[1.06]'>
                    <Icon size={16} name={state?.playing ? "pause":"play"}/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="playerNext"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon size={16} name="repeat"/>
                </button>
            </div>
            <div className="w-full flex items-center gap-x-2">
                {audio}
                <div className='text-[0.688.rem] text-white text-opacity-70'>
                    {SecondsToTime(state?.time)}
                </div>
                    <CustomRange
                    step={0.1}
                    max={state?.duration || 1}
                    value={state?.time}
                    onChange={value => controls.seek(value)}/>
        <div className="text-[0.688.rem] text-white text-opacity-70">
        {SecondsToTime(state?.duration)}
        </div>
        </div>
        </div>
        <div className="min-w-[11.25rem] w-[30%] flex items-center  justify-end">
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon size={16} name="lyrics"/>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon size={16} name="queue"/>
            </button>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon size={16} name="device"/>
            </button>
            <button
            onClick={() => {
                if (state?.volume === 0 ) {
                    controls.volume(1)
                } else {
                    controls.volume(0)
                }
            }} 
            className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon size={16} name={VolumeIcon}/>
            </button>
            <div className='w-[5.813rem] max-w-full'>
                <CustomRange
                    step={0.01}
                    min={0}
                    max={1}
                    value={state?.volume}
                    onChange={value => controls.volume(value)}
                />
            </div>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                <Icon size={16} name="fullScreen"/>
            </button>
        </div>
    </div>
  )
}

export default Player