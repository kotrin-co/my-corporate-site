import { type MicroCMSQueries } from 'microcms-js-sdk'
import type { Article } from '@/types/articles'

import { client } from './fetchClient'

export const fetchArticles = async (queries?: MicroCMSQueries) => {
  return await client.getList<Article>({
    customRequestInit: {
      next: {
        revalidate: 0, // キャッシュ
      },
    },
    endpoint: 'articles',
    queries,
  })
}
