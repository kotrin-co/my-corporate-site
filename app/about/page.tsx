'use client'

import { LeftToRightMotion, MotionWrapper } from '@/components/Motion'
import { Badge } from '@/components/ui/badge'
import type { FC } from 'react'
import { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from '@/components/ui/table'

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
            Mission
          </Badge>
          <div className="ml-6 mt-6 font-semibold md:text-2xl">
            私たちはお客さまの課題をデジタル技術により解決する企業です。
            <br />
            あらゆるデジタル技術の恩恵を、誰もが、いつでも、どこでも。
            <br />
            課題解決を通じて社会貢献するのが私たちの使命です。
          </div>

          <Badge className="mt-10 flex h-10 w-[150px] items-center justify-center bg-gray-500 text-lg md:h-14 md:w-[200px] md:text-2xl">
            Information
          </Badge>
          <div className="ml-6 mt-6 font-semibold">
            <Table>
              <TableCaption></TableCaption>
              <TableBody className="md:text-xl">
                <TableRow>
                  <TableCell>会社名</TableCell>
                  <TableCell>合同会社AnyDigi（エニデジ）</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>設立</TableCell>
                  <TableCell>2024年8月</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>所在地</TableCell>
                  <TableCell>東京都渋谷区</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>代表</TableCell>
                  <TableCell>中川 健太郎</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>事業内容</TableCell>
                  <TableCell>
                    ・Webシステムに関するコンサルティング
                    <br />
                    ・Webシステムワンストップサービス（要件定義、設計、開発、運用保守）
                    <br />
                    ・ITに関する教育事業
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </MotionWrapper>
    </div>
  )
}

export default AboutPage
