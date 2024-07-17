// 'use client'
import { fetchArticles, fetchArticleDetail } from '@/actions/articles'
import type { FC } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { CategoryList } from '@/components/CategoryList'
import { fetchCategories } from '@/actions/articles/fetchCategories'
import { use } from 'react'

export interface Props {
  params: {
    id: string
  }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const id = props.params.id
  const article = await fetchArticleDetail(id)
  return {
    title: article.title,
    description: article.description,
  }
}

export const generateStaticParams = async () => {
  const { contents } = await fetchArticles()
  return contents.map((article) => {
    return {
      id: article.id,
    }
  })
}

const ArticlePage: FC<Props> = ({ params }) => {
  const article = use(fetchArticleDetail(params.id))
  const categoryResponse = use(fetchCategories())

  if (!article) {
    return notFound()
  }

  return (
    <>
      <div className="flex-2 md:w-4/5">
        <div className="flex justify-center">
          <img
            src={article.eyecatch?.url ?? '/no-image.png'}
            alt="アイキャッチ"
            className="object-cover max-h-48 rounded-lg md:max-h-96"
          />
        </div>
      </div>
      <article className="md:px-80 flex">
        <div className="flex-2 w-full md:w-4/5 px-20">
          <div className="mt-4 text-2xl font-bold md:mt-8 md:text-5xl">
            {article.title}
          </div>

          <div className="text-md text-right md:text-lg mt-6">
            {format(new Date(article.updatedAt), 'yyyy年M月d日')}
          </div>

          <div
            className="content md:my-16 my-6"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
        <div className="hidden md:block flex-1 w-1/5 pl-16 mt-40">
          <CategoryList categories={categoryResponse.contents} />
        </div>
      </article>
    </>
  )
}

export default ArticlePage
