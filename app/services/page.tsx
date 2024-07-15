'use client'

import { LeftToRightMotion, MotionWrapper } from '@/components/Motion'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { FC } from 'react'
import { useEffect, useState } from 'react'

const ServicesPage: FC = () => {
  const [x, setX] = useState(600)

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setX(20)
    }
  }, [])

  return (
    <div className="md:px-60">
      <LeftToRightMotion fromX={-1 * x} toX={0} duration={1}>
        <div className="text-3xl font-black md:text-6xl">Services</div>
      </LeftToRightMotion>
      <MotionWrapper>
        <div className="mt-8 text-lg md:text-2xl font-black">
          Webシステムに関することは何でもご相談ください！
        </div>
        {/* <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="grid-item">
            <Card>
              <CardHeader>
                <CardTitle>Webシステム開発</CardTitle>
                <CardDescription>
                  要件定義から設計まで、クラウドを活用したWebシステム開発に対応いたします。
                </CardDescription>
                <img
                  src="/web_development.png"
                  alt="development"
                  className="rounded object-fill"
                />
              </CardHeader>
            </Card>
          </div>

          <div className="grid-item">
            <Card>
              <CardHeader>
                <CardTitle>コンサルティング</CardTitle>
                <CardDescription>
                  設計支援やクラウドインフラシステムの診断など、ITシステムに関するコンサルティングをさせていただきます。
                </CardDescription>
                <img
                  src="/consulting.png"
                  alt="consulting"
                  className="rounded object-cover"
                />
              </CardHeader>
            </Card>
          </div>

          <div className="grid-item">
            <Card>
              <CardHeader>
                <CardTitle>スキルアップサポート</CardTitle>
                <CardDescription>
                  システム開発に関するメンタリング、開発並走によりスキルアップサポートをさせていただきます。
                </CardDescription>
                <img
                  src="/support.png"
                  alt="support"
                  className="rounded object-fill"
                />
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="grid-item">
            <Card>
              <CardHeader>
                <CardTitle>API活用</CardTitle>
                <CardDescription>
                  CRMや決済など、サードパーティ提供のAPIを利用しビジネスに成果をもたらします。
                </CardDescription>
                <img src="/api.png" alt="api" className="rounded object-fill" />
              </CardHeader>
            </Card>
          </div>
          <div className="grid-item">
            <Card>
              <CardHeader>
                <CardTitle>業務効率化ツール開発</CardTitle>
                <CardDescription>
                  スプレッドシートやVBAなど業務効率化に寄与するツールを開発します。
                </CardDescription>
                <img
                  src="/tools.png"
                  alt="tools"
                  className="rounded object-fill"
                />
              </CardHeader>
            </Card>
          </div>
          <div className="grid-item">
            <Card>
              <CardHeader>
                <CardTitle>分析</CardTitle>
                <CardDescription>
                  データ活用、マーケティングを行うための分析の仕組みを実装いたします。
                </CardDescription>
                <img
                  src="/analytics.png"
                  alt="analytics"
                  className="rounded object-cover"
                />
              </CardHeader>
            </Card>
          </div>
        </div> */}

        <div className="mt-8 text-2xl font-black underline md:text-3xl">
          Solutions
        </div>

        <div className="text-md mt-4 font-black md:text-xl">
          （実績一例）
          <Table>
            <TableBody className="md:text-xl">
              <TableRow>
                <TableCell>DWHの構築</TableCell>
                <TableCell>
                  - 大規模データ集約システム <br />
                  - 任意フォーマットによるデータアップロード <br />-
                  定型によるデータダウンロード
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>LINE APIを用いたシステム開発</TableCell>
                <TableCell>
                  - LINEによる予約システム <br />
                  - LINEをプラットフォームとした画像、動画配信システム <br />-
                  LINEによる顧客管理およびマーケティングツール開発
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>決済システム</TableCell>
                <TableCell>
                  - クレジットカード決済システム
                  <br />
                  - サブスクリプション課金システム
                  <br />- PayPay課金システム
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ウェブトラッキング</TableCell>
                <TableCell>- ウェブサイトにおける顧客の行動分析</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ECサイト構築</TableCell>
                <TableCell>- ShopifyなどECサイト構築</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>クラウドシステム診断</TableCell>
                <TableCell>
                  - コスト診断および最適化
                  <br />- セキュリティ診断
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>機械学習</TableCell>
                <TableCell>
                  - 教師データあり機械学習による予測モデル構築
                  <br />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>メンタリング</TableCell>
                <TableCell>
                  - システム開発並走
                  <br />- スポットレクチャー
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* <Carousel className="mt-4 w-full">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle>予約システム</CardTitle>
                      <CardDescription>
                        データ活用、マーケティングを行うための分析の仕組みを実装いたします。
                      </CardDescription>
                      <img
                        src="/analytics.png"
                        alt="analytics"
                        className="rounded object-cover"
                      />
                    </CardHeader>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}

        <div className="mt-8 text-2xl font-black underline md:text-3xl">
          Technologies
        </div>

        <div className="text-md mt-4 font-black md:text-xl">
          各種技術に対応いたします。
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 pb-16 md:grid-cols-3">
          <div className="grid-item">
            <Card>
              <CardHeader>
                <CardTitle>開発言語</CardTitle>
                <img
                  src="/language.png"
                  alt="language"
                  className="rounded object-fill"
                />
              </CardHeader>
            </Card>
          </div>

          <div className="grid-item">
            <Card>
              <CardHeader>
                <CardTitle>フレームワーク</CardTitle>
                <img
                  src="/framework.png"
                  alt="framework"
                  className="rounded object-cover"
                />
              </CardHeader>
            </Card>
          </div>

          <div className="grid-item">
            <Card>
              <CardHeader>
                <CardTitle>その他</CardTitle>
                <img
                  src="/dev_tools.png"
                  alt="dev"
                  className="rounded object-fill"
                />
              </CardHeader>
            </Card>
          </div>
        </div>
      </MotionWrapper>
    </div>
  )
}

export default ServicesPage
