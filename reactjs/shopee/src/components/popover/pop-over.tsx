import { FloatingPortal, arrow, useFloating } from '@floating-ui/react-dom-interactions'
import { AnimatePresence, motion } from 'framer-motion'
import { ElementType, useId, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  as?: ElementType
  initialOpen?: boolean
}

const Popover = ({ children, renderPopover, className, as: Element = 'div', initialOpen = false }: Props) => {
  const [open, setOpen] = useState<boolean>(initialOpen)
  const arrowRef = useRef<HTMLDivElement>(null)
  const { x, y, strategy, floating, reference, middlewareData } = useFloating({
    middleware: [
      arrow({
        element: arrowRef
      })
    ]
  })

  return (
    <Element
      className={className}
      ref={reference}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}

      <FloatingPortal id={useId()}>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
              className=''
              ref={floating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
            >
              <span
                ref={arrowRef}
                className='absolute z-10 translate-y-[-92%] border-[11px] border-x-transparent border-t-transparent border-b-white'
                style={{
                  left: middlewareData.arrow?.x,
                  top: middlewareData.arrow?.y
                }}
              />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}

export default Popover
