import { useRef, useCallback, useEffect } from 'react'

const useDragToScroll = () => {
  const ref = useRef<HTMLUListElement | null>(null)
  const isDragging = useRef<boolean>(false)
  const startPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const scrollPos = useRef<{ scrollLeft: number; scrollTop: number }>({
    scrollLeft: 0,
    scrollTop: 0,
  })

  const onMouseDown = useCallback((e: MouseEvent) => {
    isDragging.current = true
    startPos.current = {
      x: e.clientX,
      y: e.clientY,
    }
    if (ref.current) {
      scrollPos.current = {
        scrollLeft: ref.current.scrollLeft,
        scrollTop: ref.current.scrollTop,
      }
    }
    e.preventDefault()
  }, [])

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging.current && ref.current) {
      const deltaX = e.clientX - startPos.current.x
      ref.current.scrollLeft = scrollPos.current.scrollLeft - deltaX
    }
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
  }, [])

  useEffect(() => {
    const currentRef = ref.current
    const handleMouseMove = (e: MouseEvent) => onMouseMove(e)
    const handleMouseUp = () => onMouseUp()

    if (currentRef) {
      currentRef.addEventListener('mousedown', onMouseDown as EventListener)
      window.addEventListener('mousemove', handleMouseMove as EventListener)
      window.addEventListener('mouseup', handleMouseUp as EventListener)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousedown', onMouseDown as EventListener)
      }
      window.removeEventListener('mousemove', handleMouseMove as EventListener)
      window.removeEventListener('mouseup', handleMouseUp as EventListener)
    }
  }, [onMouseDown, onMouseMove, onMouseUp])

  return ref
}

export default useDragToScroll
