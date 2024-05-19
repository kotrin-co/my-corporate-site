import { fetchArticles, fetchArticleDetail } from '@/actions/articles'
import type { FC } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import parse from 'html-react-parser'
import { format } from 'date-fns'

export interface Props {
  params: {
    id: string
  }
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const id = props.params.id
  const blog = await fetchArticleDetail(id)
  return {
    title: blog.title,
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
    <article className="md:px-60">
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

      <div className="article mt-8">{parse(article.content)}</div>
    </article>
  )
}

export default ArticlePage
