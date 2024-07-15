import { client } from './fetchClient'
import type { Categories, Category } from '@/types'

export const fetchCategories = async () => {
  return await client.getList<Category>({
    customRequestInit: {
      next: {
        revalidate: 60, // キャッシュ
      },
    },
    endpoint: 'categories',
    queries: {
      limit: 100,
    },
  })
}
