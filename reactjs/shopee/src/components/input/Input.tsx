import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  errorMessage?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

const Input = ({ name, register, type, placeholder, errorMessage, className, rules }: Props) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm'
        {...register(name, rules)}
      />
      <div className='mt-1 text-sm text-red-600'>{errorMessage}</div>
    </div>
  )
}

export default Input
