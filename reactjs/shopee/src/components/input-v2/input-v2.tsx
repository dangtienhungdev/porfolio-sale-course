import {
  FieldPath,
  FieldValues,
  useController,
  type RegisterOptions,
  type UseControllerProps,
  type UseFormRegister
} from 'react-hook-form'

import { InputHTMLAttributes, useState } from 'react'

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<any>
  rules?: RegisterOptions
  classNameInput?: string
  classNameError?: string
}

const InputV2 = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: UseControllerProps<TFieldValues, TName> & InputNumberProps
) => {
  const {
    type,
    onChange,
    className,
    value = '',
    classNameInput = 'w-full p-3 border border-gray-300 rounded-sm outline-none focus:border-gray-500 focus:shadow-sm',
    classNameError = 'mt-1 text-sm text-red-600',
    ...rest
  } = props
  const { field, fieldState } = useController(props)
  const [localValue, setLocalValue] = useState<string>(field.value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueFromInput = e.target.value
    const numberCondition = type === 'number' && (/^\d+$/.test(valueFromInput) || valueFromInput === '')
    if (numberCondition) {
      // cập nhật lại localValue
      setLocalValue(valueFromInput)
      // cập nhật lại field.value
      field.onChange(e)
      // cập nhật lại onChange callback
      onChange && onChange(e)
    }
  }

  return (
    <div className={className}>
      <input className={classNameInput} {...field} {...rest} onChange={handleChange} value={value || localValue} />
      <div className={classNameError}>{fieldState.error?.message}</div>
    </div>
  )
}

export default InputV2
