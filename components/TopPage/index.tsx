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
  }, [window.history])
  return (
    <MotionWrapper>
      <div className="relative" id="image-container">
        <img
          src="/top.jpg"
          alt="top image"
          className="inset-y-0 right-0 w-full object-cover md:absolute"
        />
        <div className="relative inset-y-0 left-0 flex w-full flex-col md:pl-10">
          <div className="text-center text-xl font-extrabold md:text-left md:text-5xl">
            Accelerating DX for Sustainable Business Growth
          </div>
          <div className="text-md text-center font-bold md:mt-4 md:text-left md:text-3xl">
            デジタルの力で成長の可能性を解き放つ
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}
