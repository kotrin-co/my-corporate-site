import type { FC } from 'react'
import { use } from 'react'
import { fetchArticles } from '@/actions/articles'
import { ArticleList } from '@/components/ArticleList'
import { PaginationComponent } from '@/components/Pagination'
import { fetchCategories } from '@/actions/articles/fetchCategories'
import { CategoryList } from '@/components/CategoryList'
import { PER_PAGE } from '@/constants'

export interface Props {
  params: {
    page: string
  }
}

export const generateStaticParams = async () => {
  const { totalCount } = await fetchArticles()
  const num = Math.ceil(totalCount / PER_PAGE)
  return [...Array(num)].map((_, i) => {
    return {
      page: String(i + 1),
    }
  })
}

const ArticlesListPage: FC<Props> = ({ params }) => {
  const { page } = params
  const { contents, totalCount } = use(
    fetchArticles({
      offset: (Number(page) - 1) * PER_PAGE,
      limit: PER_PAGE,
    }),
  )

  const categoryResponse = use(fetchCategories())

  return (
    <div className="flex">
      <div className="flex-2 w-full md:w-4/5">
        <ArticleList contents={contents} />
        {contents.length > 0 && (
          <>
            <div className="block md:hidden my-8">
              <PaginationComponent
                totalCount={totalCount}
                currentPage={Number(page)}
                perPage={PER_PAGE}
                pages={3}
              />
            </div>

            <div className="hidden md:block my-8">
              <PaginationComponent
                totalCount={totalCount}
                currentPage={Number(page)}
                perPage={PER_PAGE}
                pages={7}
              />
            </div>
          </>
        )}
      </div>
      <div className="hidden md:block flex-1 w-1/5">
        <CategoryList categories={categoryResponse.contents} />
      </div>
    </div>
  )
}

export default ArticlesListPage
