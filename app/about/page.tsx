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
            ある人気店で散髪していた時のことでした。
            <br />
            店主１人で経営するその店は、散髪中に予約電話が鳴り響き、店主は散髪の手を頻繁に止めざるを得ませんでした。
            <br />
            予約をお客さま自身でできる仕組みを作れば店主も散髪中のお客さまも幸せになれるのに。それを自分で作りたい。
            <br />
            そう思ったことが私のスタートでした。
            <br />
            日常には様々な潜在的課題があり、それに気づいたとしても実現方法がわからないから受け流してしまう。
            <br />
            それを実現するための力をつけ、様々な社会課題を解決していく。
            <br />
            <br />
            それが私の信念です。
          </div>

          <Badge className="mt-10 flex h-10 w-[150px] items-center justify-center bg-gray-500 text-lg md:h-14 md:w-[200px] md:text-2xl">
            Information
          </Badge>
          <div className="ml-6 mt-6 font-semibold md:text-2xl">
            現在個人事業主として活動中。2024年起業予定
          </div>
        </div>
      </MotionWrapper>
    </div>
  )
}

export default AboutPage
