'use client'
import StyleTooltip from './Tooltip.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquarePinterest, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'

import { useState, useCallback, useEffect } from "react"

const useBreakPoint = (width) => {
    const [isMobile, setIsMobile] = useState(false)
    const getDevice = useCallback(e =>{
        if(!e.matches){
            setIsMobile(true)
        } else{
            setIsMobile(false)
        }
    },[])

    useEffect(()=>{
        const breakPoint = window.matchMedia(`(min-width:${width}px)`)
        getDevice(breakPoint)
        breakPoint.addEventListener('change', getDevice)
        if(!breakPoint.matches) setIsMobile(true)

        return () => breakPoint.removeEventListener('change',getDevice)

    },[])

    return isMobile
}

const Tooltip = ( { text, icons, trigger, children } ) =>{
    const [isVisible, setIsVisible] = useState(false)
    const breakPoint = useBreakPoint(768)
    return (
        <div>
            {breakPoint ? (
                <>
                    <button className="rounded-full w-8 h-8 p-2 bg-slate-100 hover:bg-slate-500">{children}</button>
                    <div className={`${StyleTooltip.tooltip__container} ${StyleTooltip.tooltip__containerMobile}`}>
                        {text}
                        <FontAwesomeIcon icon={faSquareFacebook} className='text-white'/>
                        <FontAwesomeIcon icon={faSquareTwitter} className='text-white'/>
                        <FontAwesomeIcon icon={faSquarePinterest} className='text-white'/>
                        
                    </div>
                </>
                ) : (
                <>
                    <button className="rounded-full w-8 h-8 p-2 bg-slate-100 text-[var(--dark-blue)] hover:bg-slate-500 hover:text-white">{children}</button>
                    <div className={StyleTooltip.tooltip__container}>{text}</div>
                </>
            )}
        </div>
    )
}

export default Tooltip