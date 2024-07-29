import { type MicroCMSQueries } from 'microcms-js-sdk'
import type { Article } from '@/types'

import { client } from './fetchClient'

const ISR_CACHE_TIME = process.env.ISR_CACHE_TIME ?? 0

export const fetchArticles = async (queries?: MicroCMSQueries) => {
  return await client.getList<Article>({
    customRequestInit: {
      next: {
        revalidate: Number(ISR_CACHE_TIME),
      },
    },
    endpoint: 'articles',
    queries,
  })
}
