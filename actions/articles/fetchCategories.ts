import { client } from './fetchClient'
import type { Category } from '@/types'

const ISR_CACHE_TIME = process.env.ISR_CACHE_TIME ?? 0

export const fetchCategories = async () => {
  return await client.getList<Category>({
    customRequestInit: {
      next: {
        revalidate: Number(ISR_CACHE_TIME),
      },
    },
    endpoint: 'categories',
    queries: {
      limit: 100,
    },
  })
}
