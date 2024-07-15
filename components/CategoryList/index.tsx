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
        <li
          key={i}
          className={`py-3 cursor-pointer hover:bg-gray-500 text-xl list-none ${selectedCategoryId === category.id ? 'bg-gray-500' : ''}`}
        >
          <Link href={`/articles/category/${category.id}/1`}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
