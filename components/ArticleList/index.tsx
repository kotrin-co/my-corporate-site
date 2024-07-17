import type { FC } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { format } from 'date-fns'
import type { Article } from '@/types'

interface Props {
  contents: Article[]
  categoryName?: string
}

export const ArticleList: FC<Props> = ({ contents, categoryName }) => {
  return (
    <div className="-mt-20">
      <div className="md:text-xl text-center font-bold">
        {categoryName ? `${categoryName}の記事一覧` : '記事一覧'}
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:px-60">
        {contents.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <Card>
              <CardHeader className="-mt-2 flex">
                <CardTitle className="w-full truncate text-center text-lg font-semibold">
                  {article.title}
                </CardTitle>
                <div className="flex h-[150px] w-full items-center justify-center">
                  <img
                    src={article.eyecatch?.url}
                    alt={article.title}
                    className="rounded object-cover"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
                </div>

                <CardDescription className="line-clamp-3">
                  {article.description}
                </CardDescription>

                <Badge className="flex h-10 w-[100px] items-center justify-center bg-gray-500">
                  {article.category.name}
                </Badge>

                <CardDescription className="flex justify-end">
                  {format(new Date(article.updatedAt), 'yyyy年M月d日')}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
        {contents.length % 2 === 1 && <div></div>}

        {contents.length === 0 && (
          <div className="text-xl">記事がありません</div>
        )}
      </div>
    </div>
  )
}
