import classNames from 'classnames'

interface PaginateProps {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  pageSize: number
}

const RANGE = 2
const Paginate = ({ page, setPage, pageSize }: PaginateProps) => {
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false

    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <button key={index} className='px-3 py-2 mx-2 border rounded shadow-sm bg-white/60'>
            ...
          </button>
        )
      }
      return null
    }

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <button key={index} className='px-3 py-2 mx-2 border rounded shadow-sm bg-white/60'>
            ...
          </button>
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
          <button
            key={index}
            className={classNames(
              'px-3 py-2 mx-2 border rounded shadow-sm bg-white/60',
              { 'border-cyan-500': pageNumber === page },
              { 'border-transparent': pageNumber !== page }
            )}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        )
      })
  }

  return (
    <div className='flex flex-wrap justify-center mt-6'>
      <span className='px-3 py-2 mx-2 border rounded shadow-sm cursor-not-allowed bg-white/60'>Prev</span>

      {renderPagination()}

      <span className='px-3 py-2 mx-2 border rounded shadow-sm cursor-not-allowed bg-white/60'>Next</span>
    </div>
  )
}

export default Paginate
