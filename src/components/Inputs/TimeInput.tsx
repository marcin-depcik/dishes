import { useDispatch } from 'react-redux'
import { setInput } from '@/redux/features/formSlice'
import { ErrorMsg } from '@/components/Common/ErrorMsg'
import { PropsType } from './TextInput'

export const TimeInput = ({
  label,
  meta,
  input: { name, value, onChange, onBlur },
}: PropsType) => {
  const dispatch = useDispatch()

  const error = Boolean(meta.touched && meta.error)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(setInput({ name, value }))
    onChange(value)
  }

  return (
    <div className="time-input">
      <label>{label}</label>
      <input
        step="1"
        required
        type="time"
        name={name}
        onBlur={onBlur}
        data-focus={error}
        value={value || '00:00:00'}
        onChange={handleChange}
      />
      {error && <ErrorMsg msg={meta.error} />}
    </div>
  )
}
