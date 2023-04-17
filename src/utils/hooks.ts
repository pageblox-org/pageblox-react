import React, { RefObject, useEffect, useRef } from "react"

export const useOutsideClick = (callback: () => void, boundsRef: RefObject<HTMLElement | null>) => {
    const ref = useRef() as React.MutableRefObject<HTMLDivElement | null>
  
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (event.target instanceof HTMLElement) {
                if (ref.current && !ref.current.contains(event.target) && boundsRef.current?.contains(event.target)) {
                    callback()
                }
            }
        }
        
        document.addEventListener('click', handleClick, true)
        
        return () => {
            document.removeEventListener('click', handleClick, true)
        }
    }, [ref, boundsRef, callback])
  
    return ref
}