import { Link, createSearchParams } from 'react-router-dom'

import { QueryConfig } from '../../pages/porduct-list/product-list'
import classNames from 'classnames'
import path from '../../constants/path'

interface PaginateProps {
  queryConfig: QueryConfig
  pageSize: number
}

const RANGE = 2
const Paginate = ({ queryConfig, pageSize }: PaginateProps) => {
  const page = Number(queryConfig.page) || 1

  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false

    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span key={index} className='px-3 py-2 mx-2 border rounded shadow-sm bg-white/60'>
            ...
          </span>
        )
      }
      return null
    }

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span key={index} className='px-3 py-2 mx-2 border rounded shadow-sm bg-white/60'>
            ...
          </span>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1
        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
          return renderDotBefore(index)
        }

        return (
          <Link
            to={{
              pathname: path.home,
              search: createSearchParams({
                ...queryConfig,
                page: pageNumber.toString()
              }).toString()
            }}
            key={index}
            className={classNames(
              'px-3 py-2 mx-2 border rounded shadow-sm bg-white/60',
              { 'border-cyan-500': pageNumber === page },
              { 'border-transparent': pageNumber !== page }
            )}
          >
            {pageNumber}
          </Link>
        )
      })
  }

  return (
    <div className='flex flex-wrap justify-center mt-6'>
      {page === 1 ? (
        <span className='px-3 py-2 mx-2 border rounded shadow-sm cursor-not-allowed bg-white/60'>Prev</span>
      ) : (
        <Link
          to={{
            pathname: path.home,
            search: createSearchParams({
              ...queryConfig,
              page: (page - 1).toString()
            }).toString()
          }}
          className='px-3 py-2 mx-2 bg-white border rounded shadow-sm cursor-pointer'
        >
          Prev
        </Link>
      )}

      {renderPagination()}

      {page === pageSize ? (
        <span className='px-3 py-2 mx-2 border rounded shadow-sm cursor-not-allowed bg-white/60'>Next</span>
      ) : (
        <Link
          to={{
            pathname: path.home,
            search: createSearchParams({
              ...queryConfig,
              page: (page + 1).toString()
            }).toString()
          }}
          className='px-3 py-2 mx-2 bg-white border rounded shadow-sm cursor-pointer'
        >
          Next
        </Link>
      )}
    </div>
  )
}

export default Paginate
