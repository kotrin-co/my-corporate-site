// 'use client'

import type { FC } from 'react'
import { use } from 'react'
import { fetchArticles } from '@/actions/articles'
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { format } from 'date-fns'

const ArticlesListPage: FC = () => {
  const { contents } = use(fetchArticles())

  console.log('contents', contents)

  return (
    <div className="-mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:px-60">
      {contents.map((article) => (
        <Link href={`/articles/${article.id}`} key={article.id}>
          <Card className="h-[300px]">
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

              <CardDescription className="flex justify-end">
                {format(new Date(article.updatedAt), 'yyyy年M月d日')}
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ArticlesListPage
