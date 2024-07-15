import type { FC } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface Props {
  pages: number
  totalCount: number
  currentPage: number
  perPage: number
  categoryId?: string
}

export const PaginationComponent: FC<Props> = ({
  totalCount,
  currentPage,
  perPage,
  categoryId,
  pages,
}) => {
  const maxPage = Math.ceil(totalCount / perPage)
  const basePath = categoryId
    ? `/articles/category/${categoryId}`
    : `/articles/page`

  let paginationStart = currentPage
  for (let i = Math.floor(pages / 2); i > 0; i--) {
    if (currentPage - i > 0) {
      paginationStart = currentPage - i
      break
    }
  }

  const pageLimit =
    paginationStart + pages - 1 > maxPage
      ? maxPage - paginationStart + 1
      : pages

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem hidden={currentPage === 1}>
          <PaginationPrevious href={`${basePath}/${currentPage - 1}`} />
        </PaginationItem>
        <div className="hidden md:block">
          <PaginationItem hidden={currentPage <= Math.ceil(pages / 2)}>
            <PaginationEllipsis />
          </PaginationItem>
        </div>
        {[...Array(pageLimit)].map((_, i) => (
          <>
            <PaginationItem>
              <PaginationLink
                href={`${basePath}/${paginationStart + i}`}
                isActive={currentPage === paginationStart + i}
              >
                {paginationStart + i}
              </PaginationLink>
            </PaginationItem>
          </>
        ))}
        <div className="hidden md:block">
          <PaginationItem
            hidden={maxPage - currentPage <= Math.floor(pages / 2)}
          >
            <PaginationEllipsis />
          </PaginationItem>
        </div>
        <PaginationItem hidden={currentPage === maxPage}>
          <PaginationNext href={`${basePath}/${currentPage + 1}`} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
