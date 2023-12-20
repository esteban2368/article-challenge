'use client'
import StyleTooltip from './Tooltip.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'

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
    const breakPoint = useBreakPoint(640)

    const toggleShowTooltip = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div>
            {breakPoint ? (
                <>
                    <button className="flex rounded-full w-8 h-8 p-2 bg-slate-100 text-[var(--dark-blue)] hover:bg-slate-500 hover:text-white" onClick={toggleShowTooltip}>{children}</button>
                    {isVisible && (
                        <div className={`${StyleTooltip.tooltip__container} ${StyleTooltip.tooltip__containerMobile} flex items-center py-5 px-8`}>
                            <span className='uppercase mr-5'>{text}</span>
                            <div className='flex gap-4'>
                                <a href='https://www.facebook.com/' target='_blank'>
                                    <FontAwesomeIcon icon={faSquareFacebook} className='text-white' size='xl'/>
                                </a>
                                <a href='https://twitter.com/?lang=es' target='_blank'>
                                    <FontAwesomeIcon icon={faTwitter} className='text-white' size='xl'/>
                                </a>
                                <a href='https://co.pinterest.com/' target='_blank'>
                                    <FontAwesomeIcon icon={faPinterest} className='text-white' size='xl'/>
                                </a>
                            </div>
                            <button className="rounded-full w-8 h-8 p-2 ml-auto text-white bg-slate-500" onClick={toggleShowTooltip}>{children}</button>
                        </div>
                    )}
                </>
                ) : (
                <>
                    <button className="flex rounded-full w-8 h-8 p-2 bg-slate-100 text-[var(--dark-blue)] hover:bg-slate-500 hover:text-white">{children}</button>
                    <div className={`${StyleTooltip.tooltip__container} ${StyleTooltip.tooltip__containerDesktop} flex items-center rounded-lg py-5 px-8`}>
                    <span className='uppercase mr-5'>{text}</span>
                        <div className='flex gap-4'>
                            <a href='https://www.facebook.com/' target='_blank'>
                                <FontAwesomeIcon icon={faSquareFacebook} className='text-white' size='xl'/>
                            </a>
                            <a href='https://twitter.com/?lang=es' target='_blank'>
                                <FontAwesomeIcon icon={faTwitter} className='text-white' size='xl'/>
                            </a>
                            <a href='https://co.pinterest.com/' target='_blank'>
                                <FontAwesomeIcon icon={faPinterest} className='text-white' size='xl'/>
                            </a>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Tooltip