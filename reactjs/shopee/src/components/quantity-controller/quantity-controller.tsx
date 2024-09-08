import InputNumber, { InputNumberProps } from '../input-number'

import { useState } from 'react'

interface Props extends InputNumberProps {
  max?: number
  onIncrease?: (value: number) => void
  onDecrease?: (value: number) => void
  onType?: (value: number) => void
  classNameWrapper?: string
  value?: number
}

const QuantityController = (props: Props) => {
  const { max, onIncrease, onDecrease, onType, classNameWrapper = 'ml-10', value, ...rest } = props

  const [localValue, setLocalValue] = useState<number>(Number(value ?? 1))

  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let _value = Number(e.target.value)

    if (max && _value > max) {
      _value = max
    } else if (_value < 1) {
      _value = 1
    }

    onType && onType(_value)
    setLocalValue(_value)
  }

  const increase = () => {
    let _value = Number(value ?? localValue) + 1
    if (max && _value > max) {
      _value = max
    }
    onIncrease && onIncrease(_value)
    setLocalValue(_value)
  }

  const decrease = () => {
    let _value = Number(value ?? localValue) - 1
    if (_value < 1) {
      _value = 1
    }
    onDecrease && onDecrease(_value)
    setLocalValue(_value)
  }

  return (
    <div className={`flex items-center ${classNameWrapper}`}>
      <button
        className='flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-l-sm'
        onClick={decrease}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
        </svg>
      </button>
      <InputNumber
        className=''
        classNameError='hidden'
        classNameInput='h-8 w-14 border-t border-b border-gray-300 p-1 text-center outline-none'
        onChange={hanldeChange}
        value={value || localValue}
        {...rest}
      />
      <button
        className='flex items-center justify-center w-8 h-8 text-gray-600 border border-gray-300 rounded-r-sm'
        onClick={increase}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-4 h-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
        </svg>
      </button>
    </div>
  )
}

export default QuantityController
