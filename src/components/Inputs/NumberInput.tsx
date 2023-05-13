import { WrappedFieldProps } from 'redux-form'
import { ErrorMsg } from '../Common/ErrorMsg'
import { useState } from 'react'

interface PropsType extends WrappedFieldProps {
  label: string
  step?: number
  min?: number
  float?: boolean
  type?: string
}

export const NumberInput = ({
  label,
  step = 1,
  min = 1,
  float,
  type = 'number',
  meta,
  input: { name, value, onChange },
}: PropsType) => {
  const [valid, setValid] = useState(true)
  const error = Boolean((!valid || meta.touched) && meta.error)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChange(float ? parseFloat(value) : parseInt(value, 10))
    !value && setValid(false)
  }

  return (
    <div className="option-input">
      <label>{label}</label>
      <input
        min={min}
        step={step}
        required
        type={type}
        name={name}
        data-focus={error}
        placeholder="Type number..."
        value={value || ''}
        onChange={handleChange}
      />
      {error && <ErrorMsg msg={meta.error} />}
    </div>
  )
}
