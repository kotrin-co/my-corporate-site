import { fetchArticles, fetchArticleDetail } from '@/actions/articles'
import type { FC } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import 'highlight.js/styles/a11y-light.css'

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

const ArticlePage: FC<Props> = async ({ params }) => {
  const article = await fetchArticleDetail(params.id)

  if (!article) {
    return notFound()
  }

  return (
    <article className="md:px-80">
      <img
        src={article.eyecatch?.url ?? '/no-image.png'}
        alt="アイキャッチ"
        className="object-cove max-h-48 rounded-lg md:max-h-96"
      />
      <div className="mt-4 text-2xl font-bold md:mt-8 md:text-5xl">
        {article.title}
      </div>

      <div className="text-md text-right md:text-lg">
        {format(new Date(article.updatedAt), 'yyyy年M月d日')}
      </div>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  )
}

export default ArticlePage
