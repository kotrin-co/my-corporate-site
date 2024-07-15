import type { FC, ReactNode } from 'react'
import { fetchCategories } from '@/actions/articles/fetchCategories'

export interface Props {
  params: {
    categoryId: string
  }
  children: ReactNode
}

export const generateStaticParams = async () => {
  const { contents } = await fetchCategories()

  return contents.map((content) => {
    return {
      categoryId: content.id,
    }
  })
}

const Layout: FC<Props> = ({ children }) => {
  return <>{children}</>
}

export default Layout
