import type { FC } from 'react'
import { use } from 'react'
import { fetchArticles } from '@/actions/articles'
import { fetchCategories } from '@/actions/articles/fetchCategories'
import { ArticleList } from '@/components/ArticleList'
import { PaginationComponent } from '@/components/Pagination'
import { CategoryList } from '@/components/CategoryList'
import { PER_PAGE } from '@/constants'

export interface Props {
  params: {
    categoryId: string
    page: string
  }
}

export const generateStaticParams = async ({
  params,
}: {
  params: { categoryId: string }
}) => {
  const { categoryId } = params
  const { totalCount, limit } = await fetchArticles({
    filters: `category[equals]${params.categoryId}`,
  })
  const num = Math.ceil(totalCount / limit)
  return [...Array(num)].map((_, i) => {
    return {
      categoryId,
      page: String(i + 1),
    }
  })
}

const CategoryListPage: FC<Props> = ({ params }) => {
  const { categoryId, page } = params
  const { contents, totalCount } = use(
    fetchArticles({
      filters: `category[equals]${categoryId}`,
      offset: (Number(page) - 1) * PER_PAGE,
      limit: PER_PAGE,
    }),
  )

  const categoryResponse = use(fetchCategories())
  const category = categoryResponse.contents.find(
    (elm) => elm.id === categoryId,
  )

  return (
    <div className="flex">
      <div className="flex-2 w-full md:w-4/5">
        <ArticleList
          contents={contents}
          categoryName={category ? category.name : ''}
        />
        {contents.length > 0 && (
          <>
            <div className="block md:hidden mt-8">
              <PaginationComponent
                totalCount={totalCount}
                currentPage={Number(page)}
                perPage={PER_PAGE}
                pages={3}
                categoryId={categoryId}
              />
            </div>

            <div className="hidden md:block mt-8">
              <PaginationComponent
                totalCount={totalCount}
                currentPage={Number(params.page)}
                perPage={PER_PAGE}
                pages={7}
                categoryId={categoryId}
              />
            </div>
          </>
        )}
      </div>
      <div className="hidden md:block flex-1 w-1/5">
        <CategoryList
          categories={categoryResponse.contents}
          selectedCategoryId={categoryId}
        />
      </div>
    </div>
  )
}

export default CategoryListPage
