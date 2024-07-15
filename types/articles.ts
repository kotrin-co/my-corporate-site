import type { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'
import type { Category } from './category'

export type Article = {
  id: string
  title: string
  content: string
  eyecatch: MicroCMSImage
  description: string
  category: Category
} & MicroCMSDate

export type Articles = {
  contents: Article[]
  totalCount: number
  offset: number
  limit: number
}
