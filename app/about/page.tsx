'use client'

import { LeftToRightMotion, MotionWrapper } from '@/components/Motion'
import { Badge } from '@/components/ui/badge'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

const AboutPage: FC = () => {
  const [x, setX] = useState(600)

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setX(20)
    }
  }, [])

  return (
    <div className="md:px-60">
      <LeftToRightMotion fromX={-1 * x} toX={0} duration={1}>
        <div className="text-3xl font-black md:text-6xl">About</div>
      </LeftToRightMotion>
      <MotionWrapper>
        <div className="md:pt-20 md:text-2xl">
          <Badge className="mt-10 flex h-10 w-[150px] items-center justify-center bg-gray-500 text-lg md:mt-0 md:h-14 md:w-[200px] md:text-2xl">
            Philosophy
          </Badge>
          <div className="ml-6 mt-6 font-semibold md:text-2xl">
            静かな店内に、電話の鈴音が絶え間なく響き渡る。
            <br />
            個人経営の店主は、その音に耳を傾ける。
            <br />
            予約の声、問い合わせの声、忙しさを告げる音。
            <br />
            しかし、その響きは喜びではなく、悩みとともに漂う。
            <br />
            <br />
            私たちはこのような日常に潜む課題にデジタルの力を駆使し挑んでいきます。
            <br />
            技術の研鑽を積み、課題に立ち向かう意欲を持ち続けることで、私たちは変革を起こし、より良い未来を創造します。
          </div>

          <Badge className="mt-10 flex h-10 w-[150px] items-center justify-center bg-gray-500 text-lg md:h-14 md:w-[200px] md:text-2xl">
            Information
          </Badge>
          <div className="ml-6 mt-6 font-semibold md:text-2xl">
            2024年起業予定
          </div>
        </div>
      </MotionWrapper>
    </div>
  )
}

export default AboutPage
