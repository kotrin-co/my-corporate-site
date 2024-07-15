import { type MicroCMSQueries } from 'microcms-js-sdk'
import type { Article } from '@/types'
import { load } from 'cheerio'
import hljs from 'highlight.js'
import { client } from './fetchClient'

export const fetchArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const data = await client.getListDetail<Article>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: 'articles',
    contentId,
    queries,
  })

  // シンタックスハイライト処理
  const $ = load(data.content)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  data.content = $.html()

  return data
}
