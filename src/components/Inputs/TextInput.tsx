import { ErrorMsg } from '@/components/Common/ErrorMsg'
import { WrappedFieldProps } from 'redux-form'

export interface PropsType extends WrappedFieldProps {
  placeholder: string
  label?: string
}

export const TextInput = ({
  placeholder,
  label,
  meta,
  input: { name, value, onChange, onBlur },
}: PropsType) => {
  const error = Boolean(meta.touched && meta.error)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChange(value)
  }

  return (
    <div className="text-input">
      <label>{label}</label>
      <input
        required
        type="text"
        name={name}
        data-focus={error}
        value={value.trimStart()}
        onBlur={onBlur}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <ErrorMsg msg={meta.error} />}
    </div>
  )
}
