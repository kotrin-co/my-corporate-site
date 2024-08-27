import type { FC } from 'react'
import type { Category } from '@/types'
import Link from 'next/link'

interface Props {
  categories: Category[]
  selectedCategoryId?: string
}

export const CategoryList: FC<Props> = ({ categories, selectedCategoryId }) => {
  return (
    <ul>
      <div className="text-2xl mb-4 underline">カテゴリ一覧</div>
      {categories.map((category, i) => (
        <Link key={i} href={`/articles/category/${category.id}/1`}>
          <li
            className={`py-3 cursor-pointer hover:bg-gray-500 text-xl list-none ${selectedCategoryId === category.id ? 'bg-gray-500' : ''}`}
          >
            {category.name}
          </li>
        </Link>
      ))}
    </ul>
  )
}
