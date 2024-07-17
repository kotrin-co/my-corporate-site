import { client } from './fetchClient'
import type { Category } from '@/types'

export const fetchCategories = async () => {
  return await client.getList<Category>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: 'categories',
    queries: {
      limit: 100,
    },
  })
}
