import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface FormInputs {
  [key: string]: string | number
  name: string
  preparation_time: string
  type: string
  no_of_slices: number
  diameter: number
  spiciness_scale: number
  slices_of_bread: number
}

const initialState: FormInputs = {
  name: '',
  preparation_time: '',
  type: '',
  no_of_slices: 1,
  diameter: 0.1,
  spiciness_scale: 5,
  slices_of_bread: 1,
}

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    setInput: (
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: string; value: string | number }>
    ) => {
      state[name] = value
    },
  },
})

export const { setInput } = formSlice.actions
