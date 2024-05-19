import { type MicroCMSQueries } from 'microcms-js-sdk'
import type { Article } from '@/types/articles'

import { client } from './fetchClient'

export const fetchArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Article>({
    customRequestInit: {
      next: {
        revalidate: 0,
      },
    },
    endpoint: 'articles',
    contentId,
    queries,
  })
}
