import { WrappedFieldProps } from 'redux-form'
import { ErrorMsg } from '../Common/ErrorMsg'

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
  input: { name, value, onChange, onBlur },
}: PropsType) => {
  const error = Boolean(meta.touched && meta.error)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChange(float ? parseFloat(value) : parseInt(value, 10))
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
        onBlur={onBlur}
        onChange={handleChange}
      />
      {error && <ErrorMsg msg={meta.error} />}
    </div>
  )
}
