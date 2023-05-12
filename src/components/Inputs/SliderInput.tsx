import { setInput } from '@/redux/features/formSlice'
import { Slider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { PropsType } from './TextInput'
import { ErrorMsg } from '../Common/ErrorMsg'

export const SliderInput = ({
  label,
  meta,
  input: { value, onChange, ...input },
}: PropsType) => {
  const dispatch = useDispatch()

  const error = Boolean(meta.touched && meta.error)

  const marks = () => {
    const marks = []
    for (let i = 1; i <= 10; i++) {
      marks.push({
        value: i,
        label: i.toString(),
      })
    }
    return marks
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    onChange(value)
    dispatch(
      setInput({
        name,
        value: parseInt(value, 10),
      })
    )
  }

  return (
    <div className="option-input">
      <label>{label}</label>
      <Slider
        marks={marks()}
        min={1}
        max={10}
        step={1}
        name={input.name}
        className="slider"
        value={parseInt(value, 10) || 5}
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
      {error && <ErrorMsg msg={meta.error} />}
    </div>
  )
}
