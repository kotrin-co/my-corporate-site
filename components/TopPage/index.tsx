'use client'

import { MotionWrapper } from '@/components/Motion'
import { useEffect, type FC } from 'react'

export const TopPage: FC = () => {
  useEffect(() => {
    const setImageContainerHeight = () => {
      const img = document.querySelector<HTMLImageElement>(
        '#image-container img',
      )
      const parentDiv = document.getElementById('image-container')
      if (img && parentDiv) {
        parentDiv.style.height = img.offsetHeight + 'px'
      }
    }

    if (window.innerWidth > 768) {
      setImageContainerHeight()

      return () => {
        window.removeEventListener('resize', setImageContainerHeight)
      }
    }
  }, [])

  return (
    <MotionWrapper>
      <div className="relative" id="image-container">
        <img
          src="/top.jpg"
          alt="top image"
          className="inset-y-0 right-0 w-full object-cover md:absolute"
        />
        <div className="relative inset-y-0 left-0 flex w-full flex-col md:pl-40">
          <div className="text-center text-2xl font-extrabold md:text-left md:text-5xl">
            Any Vision, Any Solution
          </div>
          <div className="text-md text-center font-bold md:mt-4 md:text-left md:text-3xl">
            どんな目標にも、あらゆる解決策を
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}
