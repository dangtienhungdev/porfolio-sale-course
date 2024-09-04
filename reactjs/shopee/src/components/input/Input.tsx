import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  classNameInput?: string
  classNameError?: string
}

const Input = ({
  name,
  register,
  errorMessage,
  className,
  rules,
  classNameError = 'mt-1 text-sm text-red-600',
  classNameInput = 'w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm',
  ...rest
}: Props) => {
  const registerResult = register && name ? register(name, rules) : {}

  return (
    <div className={className}>
      <input className={classNameInput} {...registerResult} {...rest} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}

export default Input
