import type { MicroCMSDate } from 'microcms-js-sdk'

export type Category = {
  id: string
  name: string
} & MicroCMSDate

export type Categories = {
  contents: Category[]
  totalCount: number
  offset: number
  limit: number
}
