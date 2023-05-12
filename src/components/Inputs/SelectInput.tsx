import { setInput } from '@/redux/features/formSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ErrorMsg } from '@/components/Common/ErrorMsg'
import { PropsType } from './TextInput'

import '@/styles/components/SelectInput.scss'

interface Option {
  text: string
  type: string
}

export const SelectInput = ({
  placeholder,
  label,
  meta,
  input: { name, value, onChange, onBlur },
}: PropsType) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState(placeholder)

  const error = Boolean(meta.touched && meta.error)
  const options: Option[] = [
    {
      text: 'Pizza',
      type: 'pizza',
    },
    {
      text: 'Soup',
      type: 'soup',
    },
    {
      text: 'Sandwich',
      type: 'sandwich',
    },
  ]

  const openCloseSelect = () => {
    setActive(!active)
    if (active && !value) {
      onBlur(null)
    }
  }

  const handleSelect = (option: Option) => {
    dispatch(setInput({ name, value: option.type }))
    setSelected(option.text)
    onChange(option.type)
    setActive(false)
  }

  return (
    <div data-focus={error} className="select-input">
      <label>{label}</label>
      <div className="select-wrapper">
        <div className="select-btn" onClick={openCloseSelect}>
          <span className="select-label">{selected}</span>
          <span className="select-arrow"></span>
        </div>
        {active && (
          <div className="options">
            {options.map((option, index) => (
              <div
                key={index}
                className="option"
                onClick={() => handleSelect(option)}
              >
                {option.text}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <ErrorMsg msg={meta.error} />}
    </div>
  )
}
