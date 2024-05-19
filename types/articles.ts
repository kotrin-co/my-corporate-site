import type { MicroCMSDate, MicroCMSImage } from 'microcms-js-sdk'

export type Article = {
  id: string
  title: string
  content: string
  eyecatch?: MicroCMSImage
  description: string
} & MicroCMSDate
