import { Slider } from '@mui/material'
import { PropsType } from './TextInput'
import { ErrorMsg } from '../Common/ErrorMsg'
import { useEffect } from 'react'

export const SliderInput = ({
  label,
  meta,
  input: { value, onChange, ...input },
}: PropsType) => {
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
    const { value } = e.target
    onChange(parseInt(value, 10))
  }

  useEffect(() => {
    onChange(5)
  }, [])

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
        value={value || 5}
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
      {error && <ErrorMsg msg={meta.error} />}
    </div>
  )
}
